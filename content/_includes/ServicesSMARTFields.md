| Name | Description |
|------|-------------|
| **Check Interval** | Enter the time in minutes for [smartd](https://www.freebsd.org/cgi/man.cgi?query=smartd&manpath=FreeBSD+11.1-RELEASE+and+Ports) to wake up and check if any tests are configured to run. |
| **Power Mode** | Select the power mode from the dropdown list. Options are **Never**, **Sleep**, **Standby** or **Idle**. S.M.A.R.T. only tests when the **Power Mode** is **Never**. |
| **Difference** | Enter a number of degrees in Celsius. S.M.A.R.T. reports if a drive temperature changes by N degrees Celsius since the last report. |
| **Informational** | Enter a threshold temperature in Celsius. S.M.A.R.T. sends a message with a LOG_INFO log level if the temperature is above the threshold. |
| **Critical** | Enter a threshold temperature in Celsius. S.M.A.R.T. sends a message with a LOG_CRIT log level and send an email if the temperature is above the threshold. |
