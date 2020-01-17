#!/bin/sh

#Make sure all the required packages are installed first
req_pkgs="gohugo"
for _pkg in ${req_pkgs}
do
  echo "Checking for Package: ${_pkg}"
  pkg info -qe  "${_pkg}"
  if [ $? -eq 1 ] ; then
    _pkg_needed="${_pkg_needed} ${_pkg}"
  fi
done
if [ -n "${_pkg_needed}" ] ; then
echo "Installing Required Packages: ${_pkg_needed}"
    sudo pkg install -y ${_pkg_needed}
    if [ $? -ne 0 ] ; then
      echo "[ERROR] Unable to install packages: ${_pkg_needed}"
      exit 1
    fi
fi
#Now start up the internal test server on port 1313
origdir=${PWD}
cd hugo-site
#for configfile in "config.toml" "static/css/theme-trident.css"
#do
# if [ -f "${configfile}" ] ; then rm "${configfile}" ; fi
#  cp "${configfile}.template" "${configfile}"
#  sed -i '' "s|CHANGEME||g" "${configfile}"
#done

hugo serve --disableFastRender
cd "${origdir}"
