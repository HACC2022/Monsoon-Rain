import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)

import requests
import pandas as pd
from bs4 import BeautifulSoup

# measureTypes = ['hb']
measureTypes = ['hb','sb','hr','sr','hcr','scr','gm']
year = 2022

df = pd.DataFrame(columns=['bill','versions','committee_reports','hearing'])

# i = 0
for t in measureTypes:
  print(f'Processing {t}...')
  url = "https://www.capitol.hawaii.gov/advreports/advreport.aspx?year=" + str(year) + "&report=deadline"
  if t == 'hb' or t == 'sb':
    url += "&active=True"
  url += "&rpt_type=&measuretype=" + t
  
  page = requests.get(url)
  soup = BeautifulSoup(page.content, "html.parser")

  results = soup.find_all('a', {"class": "report"})
  for a in results:
    # if i == 5:
    #   break

    print(f"\t{a.get_text()}")
    subPage = requests.get(a['href'])
    subSoup = BeautifulSoup(subPage.content, "html.parser")

    # print(f"\tGrabbing versions...")
    version = ""
    tables = subSoup.find('table', {"id": "ctl00_ContentPlaceHolder1_GridViewVersions"})
    version_info = tables.find_all('a')
    for v in version_info:
      if not v['href'].endswith('.pdf') and not v['href'].endswith('.PDF'):
        version = f"{version}, {v.get_text()}:{v['href']}"
    version = version[2:]
    # print(f"\t\tGrabbed {len(version)} versions.")

    # print(f"\tGrabbing committee reports...")
    committee_reports = ""
    tables = subSoup.find('table', {"id": "ctl00_ContentPlaceHolder1_GridViewCommRpt"})
    reports_info = tables.find_all('a')
    for c in reports_info:
      if not c['href'].endswith('.pdf') and not c['href'].endswith('.PDF'):
        committee_reports = f"{committee_reports}, {c.get_text()}:{c['href']}"
    committee_reports = committee_reports[2:]
    # print(f"\t\tGrabbed {len(committee_reports)} reports.")

    # print(f"\tGrabbing hearings...")
    hearing = ""
    tables = subSoup.find('table', {"id": "ctl00_ContentPlaceHolder1_GridView1"})
    hearing_info = tables.find_all('span')
    numEl = len(hearing_info)

    if numEl > 0:
      links = tables.find_all('a')

      idx1 = 0; idx2 = 0
      hearing = ""
      while idx1 < numEl:
        obj = f"comm: {hearing_info[idx1].get_text()}, date/time: {hearing_info[idx1+1].get_text()}, room: {hearing_info[idx1+2].get_text()}, notice: {links[idx2]['href']}"
        if idx2+1 != len(links):
          obj = f"{obj}, link: {links[idx2+1]['href']}"
        else:
          obj = f"{obj}, link: "
        hearing += f"{hearing}; {obj}"
        idx1 += 3; idx2 += 2
    hearing = hearing[2:]
    # print(f"\t\tGrabbed {len(hearing)} hearings.")

    df = df.append({
      'code': a.get_text(),
      'versions': version,
      'committee_reports': committee_reports,
      'hearing': hearing
    }, ignore_index=True)
    # i += 1

print(df)
df.to_pickle("./data.pkl")