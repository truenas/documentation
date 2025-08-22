<style>
.apps-market-banner {
  text-decoration: none !important; 
  color: inherit;
}
.apps-market-banner:hover {
  text-decoration: none !important;
}
.apps-market-banner > div {
  display: flex; 
  align-items: center; 
  gap: 1.5rem; 
  margin: 1.25rem 0; 
  padding: 1.25rem; 
  border: 2px solid #e0e0e0; 
  border-radius: 12px; 
  background: linear-gradient(135deg, #e9ecef 0%, #f8f9fa 100%); 
  cursor: pointer; 
  transition: all 0.3s ease; 
  box-shadow: 0 2px 8px rgba(0, 149, 213, 0.1);
}
.apps-market-banner .logo-section {
  flex-shrink: 0; 
  display: flex; 
  align-items: center;
}
.apps-market-banner .logo-section img {
  width: 2.5rem; 
  height: 2.5rem; 
  margin-right: 0.25rem;
  flex-shrink: 0;
}
.apps-market-banner .logo-section span {
  font-weight: bold; 
  font-size: 1.25rem; 
  color: #0095d5; 
  line-height: 1;
  white-space: nowrap;
}
.apps-market-banner .description {
  flex: 1; 
  color: #666;
  font-size: 0.95rem;
  min-width: 0;
}
@media (max-width: 768px) {
  .apps-market-banner > div {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  .apps-market-banner .logo-section span {
    font-size: 1.1rem;
  }
  .apps-market-banner .logo-section img {
    width: 2rem;
    height: 2rem;
  }
}
@media (max-width: 480px) {
  .apps-market-banner .logo-section span {
    font-size: 1rem;
    white-space: normal;
  }
  .apps-market-banner .logo-section img {
    width: 1.75rem;
    height: 1.75rem;
  }
  .apps-market-banner .description {
    font-size: 0.9rem;
  }
}
</style>

<a href="https://apps.truenas.com/" class="apps-market-banner" onmouseover="this.firstElementChild.style.borderColor='#0095d5'; this.firstElementChild.style.boxShadow='0 4px 16px rgba(0, 149, 213, 0.2)'; this.firstElementChild.style.transform='translateY(-2px)'" onmouseout="this.firstElementChild.style.borderColor='#e0e0e0'; this.firstElementChild.style.boxShadow='0 2px 8px rgba(0, 149, 213, 0.1)'; this.firstElementChild.style.transform='translateY(0)'">
  <div>
    <div class="logo-section">
      <img src="/icons/apps-market.svg" alt="TrueNAS Apps Market">
      <span>TrueNAS Apps Market</span>
    </div>
    <div class="description">
      Your source for general apps documentation, a browsable catalog, and individual app resources.
    </div>
  </div>
</a>