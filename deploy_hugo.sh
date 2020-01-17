#!/bin/bash
#Script to take the statically-generated pages and deploy them with nginx
DIST_DIR="$1"
PROFILE_NAME="docs"
FINAL_SITE="localhost"
RELDIR="/"
if [ -n "${2}" ] ; then
  RELDIR="${2}"
fi

if [ ! -e "/usr/local/bin/hugo" ] && [ ! -e "/usr/bin/hugo" ] ; then
  echo "[ERROR] Hugo is not installed (pkg install gohugo) - cannot deploy site"
  return 1
fi

if [ -z "${DIST_DIR}" ] ; then
  DIST_DIR="/usr/local/www/${PROFILE_NAME}"
fi

if [ ! -d "${DIST_DIR}" ] ; then
  mkdir -p "${DIST_DIR}"
fi
# Build the static site with Hugo and deploy it in the dist dir
basedir=`dirname $0`
basedir=`realpath -q "${basedir}"`
#Copy the config.toml.template file over and adjust the site BASE url
for configfile in "${basedir}/hugo-site/config.toml" "${basedir}/hugo-site/static/css/theme-trident.css"
do
  if [ -f "${configfile}" ] ; then rm "${configfile}" ; fi
  cp "${configfile}.template" "${configfile}"
  sed -i'' "s|CHANGEME|${RELDIR}|g" "${configfile}"
done
hugo --ignoreCache -s "${basedir}/hugo-site" -b "http://${FINAL_SITE}${RELDIR}" -d "${DIST_DIR}"  --cleanDestinationDir
ret=$?
chmod 744 "${DIST_DIR}"
exit $ret
