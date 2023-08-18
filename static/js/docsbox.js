// Show the selected tab content
function showTab(tab, tabId) {
  // Hide all tab contents in this box
  const tabContents = tab.parentElement.parentElement.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.style.display = 'none');
  
  // Show the selected tab content
  const selectedTabContent = document.getElementById(tabId);
  selectedTabContent.style.display = 'block';
  
  // Set active tab
  const tabs = tab.parentElement.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
}