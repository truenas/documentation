---
title: "Documentation Hub"
description: "Home page for the TrueNAS documentation projects."
geekdocCollapseSection: true
aliases:
 - /core/system/support/
 - /core/network/networksummary/
 - /core/directoryservices/ldap/
 - /core/13.3.0/
main_index_class: main-index-page
---
<style>
div.gdoc-page__header {display: none;}
div.docs-read_mod {display: none !important;}
.sidebar-right {display: none;}
h1 {display:none;}

/* Product section layout */
.index-product-section { margin: 1.25rem 0 1.75rem; }
.index-product-section h2 {
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-top: 0;
  margin-bottom: .65rem;
}
.idx-section-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  box-shadow: none !important;
}
.idx-section-icon-svg {
  width: 36px;
  height: 36px;
  fill: #0095d5;
  flex-shrink: 0;
}
.index-btn-row { display: flex; flex-wrap: wrap; gap: .5rem; align-items: center; }

/* Connect-style pill buttons */
.idx-btn {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  padding: .5rem 1.25rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none !important;
  cursor: pointer;
  font-family: "din-2014", "Inter", sans-serif;
  border: 2px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
}

/* Primary: blue → green wipe on hover (gradient slide, no overflow:hidden) */
.idx-btn-primary {
  background: linear-gradient(100deg, #71bf44 50%, #0095d5 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
  color: white !important;
  border: 2px solid #0095d5 !important;
  transition: background-position 0.25s ease, border-color 0.25s ease;
}
.idx-btn-primary:hover {
  background-position: 0 0;
  border-color: #71bf44 !important;
}

/* Outline: white/blue → green wipe on hover */
.idx-btn-outline {
  background: linear-gradient(100deg, #71bf44 50%, white 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
  color: #0095d5 !important;
  border: 2px solid #0095d5 !important;
  transition: background-position 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}
.idx-btn-outline:hover {
  background-position: 0 0;
  border-color: #71bf44 !important;
  color: white !important;
}

/* Custom dropdown — colors match hub navbar dropdowns */
.idx-dropdown { position: relative; display: inline-block; }
.idx-dropdown-panel {
  display: none;
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 200;
  min-width: 180px;
  background-color: #1a1a1a;
  box-shadow: 0 8px 16px rgba(0,0,0,0.35);
  border-top: 2px solid #0095d5;
}
.idx-dropdown-panel.open { display: block; }
.idx-dropdown-section {
  font-size: .72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .06em;
  padding: 8px 16px 3px;
  color: rgba(255,255,255,0.45);
}
.idx-dropdown-panel a {
  display: block;
  padding: 9px 16px;
  color: white !important;
  text-decoration: none !important;
  font-size: 15px;
  font-weight: 500;
}
.idx-dropdown-panel a:hover {
  color: #31beec !important;
  background: rgba(255,255,255,0.06);
}
:root[color-theme=light] .idx-dropdown-panel {
  background-color: white;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
:root[color-theme=light] .idx-dropdown-section { color: rgba(0,0,0,0.4); }
:root[color-theme=light] .idx-dropdown-panel a { color: #1a1a1a !important; }
:root[color-theme=light] .idx-dropdown-panel a:hover {
  color: #0095d5 !important;
  background: rgba(0,0,0,0.04);
}

/* Tighter info sections */
.index-info-section {
  display: flex;
  align-items: baseline;
  gap: .6rem;
  margin: .75rem 0;
}
.index-info-section .index-info-icon {
  flex-shrink: 0;
  margin-top: 2px;
}
</style>

<div class="index-product-section">
  <h2>
    <img src="/images/Truenas_icon.png" class="idx-section-icon" alt="">
    TrueNAS
  </h2>
  <div class="index-btn-row">
    <a href="/scale/25.10/" class="idx-btn idx-btn-primary">Current (25.10)</a>
    <div class="idx-dropdown">
      <button class="idx-btn idx-btn-outline idx-dropdown-btn">Other Versions <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="flex-shrink:0"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div class="idx-dropdown-panel">
        <div class="idx-dropdown-section">Next</div>
        <a href="/scale/26/">26 (Development)</a>
        <a href="/scale/">27 (Nightly)</a>
        <div class="idx-dropdown-section">Previous</div>
        <a href="https://www.truenas.com/docs/scale/25.04/">25.04</a>
        <a href="https://www.truenas.com/docs/core/13.0/">13.0</a>
        <a href="/archive/">Archive</a>
      </div>
    </div>
  </div>
</div>

<div style="margin: .75rem 0 1.5rem;">
  <div style="display:flex;align-items:flex-start;gap:.6rem;margin-bottom:.5rem;">
    <img src="/images/Software_Status_Icon_2.png" alt="" style="width:22px;height:22px;flex-shrink:0;margin-top:2px;">
    <p style="margin:0;"><strong>Development Preview</strong> — Choose a <strong>Next</strong> version from the <strong>Version</strong> dropdown for in-development builds.<br>See the <a href="https://docs.truenas.com/software-status/">Software Status page</a> for release schedules and upgrade paths.</p>
  </div>
  <div style="display:flex;align-items:flex-start;gap:.6rem;">
    <i class="fas fa-archive" style="color:#0095d5;font-size:18px;flex-shrink:0;margin-top:3px;"></i>
    <p style="margin:0;"><strong>Historical Documentation</strong> — Documentation for unsupported releases is archived and unmaintained.<br>Visit the <a href="/archive/">Documentation Archive</a> for past versions.</p>
  </div>
</div>

<div class="index-product-section">
  <h2>
    <svg class="idx-section-icon-svg" viewBox="0 0 24 24"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/></svg>
    Products
  </h2>
  <div class="index-btn-row">
    <a href="/hardware/" class="idx-btn idx-btn-primary">Overview</a>
    <div class="idx-dropdown">
      <button class="idx-btn idx-btn-outline idx-dropdown-btn">Choose Product <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="flex-shrink:0"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div class="idx-dropdown-panel">
        <a href="/hardware/fseries/">F-Series</a>
        <a href="/hardware/hseries/">H-Series</a>
        <a href="/hardware/mseries/">M-Series</a>
        <a href="/hardware/rseries/">R-Series</a>
        <a href="/hardware/minifamily/">Mini</a>
        <a href="/hardware/legacyhardware/">Legacy Systems</a>
      </div>
    </div>
  </div>
</div>

<div class="index-product-section">
  <h2>
    <img src="/images/truecommand-icon-full-color-rgb.png" class="idx-section-icon" alt="">
    TrueCommand
  </h2>
  <div class="index-btn-row">
    <a href="/truecommand/3.0/" class="idx-btn idx-btn-primary">Current</a>
    <a href="/archive/" class="idx-btn idx-btn-outline">Archive</a>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.idx-dropdown-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var panel = btn.nextElementSibling;
      var isOpen = panel.classList.contains('open');
      document.querySelectorAll('.idx-dropdown-panel.open').forEach(function(p) { p.classList.remove('open'); });
      if (!isOpen) panel.classList.add('open');
    });
  });
  document.addEventListener('click', function() {
    document.querySelectorAll('.idx-dropdown-panel.open').forEach(function(p) { p.classList.remove('open'); });
  });
});
</script>

<h2>Additional Content</h2>

<div class="docs-more-sections">
  <p>TrueNAS Docs Hub
    <br><a href="https://docs.truenas.com/">Home</a>
    <br><a href="https://connect.truenas.com/">TrueNAS Connect</a>
    <br><a href="https://api.truenas.com/">TrueNAS API</a>
    <br><a href="https://apps.truenas.com/">Apps Market</a>
    <br><a href="https://security.truenas.com/">Security Reports</a>
    <br><a href="https://docs.truenas.com/software-status/">Software Status</a>
  </p>
  <p>Project Contributions
    <br><a href="https://docs.truenas.com/contributing/">Overview</a>
    <br><a href="https://docs.truenas.com/contributing/uitranslations/">Interface Translations</a>
    <br><a href="https://docs.truenas.com/contributing/issuereporting/">Issue Reporting</a>
    <br><a href="https://docs.truenas.com/contributing/documentation/">Documentation Changes</a>
  </p>
  <p>Reference Content
    <br><a href="https://docs.truenas.com/solutions/">Solutions</a>
    <br><a href="https://docs.truenas.com/references/">Reference Articles</a>
    <br><a href="https://docs.truenas.com/references/conceptsandterms/">Concepts and Terminology</a>
    <br><a href="https://docs.truenas.com/references/zfsprimer/">ZFS Primer</a>
    <br><a href="https://docs.truenas.com/references/aclprimer/">ACL Primer</a>
    <br><a href="https://docs.truenas.com/references/copyrights/">Copyrights and Trademarks</a>
  </p>
</div>
