---
title: "The TrueNAS API"
description: "Using the TrueNAS RESTful API."
---

A REST API is provided to be used as an alternate mechanism for remotely controlling a TrueNAS® system.

REST provides an easy-to-read, HTTP implementation of functions, known as resources, which are available beneath a specified base URL. Each resource is manipulated using the HTTP methods defined in RFC 2616, such as GET, PUT, POST, or DELETE.

TrueNAS API Documentation has both websocket and RESTful information: https://api.ixsystems.com/freenas/

# A Simple API Example

Here is the example RESTful script with an explanation of the line numbers below it.  Piping your output through the program `jq` can make things eaiser to read. Example:
`python script.py | jq .`

{{< highlight python "linenos=true" >}}
import json
import requests

r = requests.post(
    'https://freenas.mydomain/api/v2.0/user/',
    auth=('root', 'freenas'),
    headers={'Content-Type': 'application/json'},
    verify=False,
    data=json.dumps({
        'bsdusr_uid': '1100',
        'bsdusr_username': 'myuser',
        'bsdusr_mode': '755',
        'bsdusr_creategroup': True,
        'bsdusr_password': '12345',
        'bsdusr_shell': '/usr/local/bin/bash',
        'bsdusr_full_name': 'Full Name',
        'bsdusr_email': 'name@provider.com',
    }),
)
print r.text
{{< /highlight >}}

Lines 1-2: import the Python modules used to make HTTP requests and handle data in JSON format.

Line 4: replace truenas.mydomain with the Hostname value in Network ➞ Global Configuration. Note that the script will fail if the machine running it is unable to resolve that hostname. Go to System ➞ General and set the Protocol to HTTP.

Line 5: replace truenas with the password used to access the TrueNAS® system.

Line 7: to force validation of the SSL certificate while using HTTPS, change False to True.

Lines 8-16: set the values for the user being created. The user section at api.ixsystems.com/freenas describes this in more detail. Allowed parameters are listed in the JSON Parameters section of that resource. Since this resource creates a FreeBSD user, the values entered must be valid for a FreeBSD user account. The following table summarizes acceptable values. This resource uses JSON, so the boolean values are True or False.

| JSON Parameter           | Type    | Description                                                                                                                        |
|--------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------|
| bsdusr_username          | string  | Maximum 32 characters, though a maximum of 8 is recommended for interoperability. Can include numerals but cannot include a space. |
| bsdusr_full_name         | string  | May contain spaces and uppercase characters.                                                                                       |
| bsdusr_password          | string  | Can include a mix of upper and lowercase letters, characters, and numbers.                                                         |
| bsdusr_uid               | integer | By convention, user accounts have an ID greater than 1000 with a maximum allowable value of 65,535.                                |
| bsdusr_group             | integer | If bsdusr_creategroup is set to False, specify the numeric ID of the group to create.                                              |
| bsdusr_creategroup       | boolean | Set True to automatically create a primary group with the same numeric ID as bsdusr_uid.                                           |
| bsdusr_mode              | string  | Sets default numeric UNIX permissions of a user home directory.                                                                    |
| bsdusr_shell             | string  | Specify the full path to a UNIX shell that is installed on the system.                                                             |
| bsdusr_password_disabled | boolean | Set to True to disable user login.                                                                                                 |
| bsdusr_locked            | boolean | Set to True to disable user login.                                                                                                 |
| bsdusr_sudo              | boolean | Set to True to enable sudo for the user.                                                                                           |
| bsdusr_sshpubkey         | string  | Contents of SSH authorized keys file.                                                                                              |

*Note*: When using boolean values, JSON returns raw lowercase values but Python uses uppercase values. So use True or False in Python scripts even though the example JSON responses in the API documentation are displayed as true or false.
