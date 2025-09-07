import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { GdprComplianceComponent } from './pages/gdpr-compliance/gdpr-compliance.component';
import { DataSecurityComponent } from './pages/data-security/data-security.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'gdpr-compliance', component: GdprComplianceComponent },
  { path: 'data-security', component: DataSecurityComponent },
  { path: '**', redirectTo: '' }
];
