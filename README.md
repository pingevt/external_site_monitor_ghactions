# external_site_monitor_ghactions

Example curl call to get workflows and IDs.
```
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/pingevt/external_site_monitor_ghactions/actions/workflows
```
