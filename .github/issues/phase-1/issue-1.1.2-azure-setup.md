# User Story 1.1.2: Azure Account & Initial Setup

## Story
**As a** developer learning Azure
**I want to** set up an Azure account and understand basic services
**So that** I can migrate my backend to Azure

## Acceptance Criteria
- [ ] Azure account created
- [ ] Azure subscription activated (free tier)
- [ ] Azure Portal navigation understood
- [ ] Basic Azure CLI installed and configured
- [ ] Resource group created for the project

## Tasks

### Account Setup
- [ ] Create Azure account at https://azure.microsoft.com/free/
  - Use your personal email
  - Free tier includes $200 credit for 30 days
  - Many services free for 12 months
- [ ] Verify email and complete account setup
- [ ] Log into Azure Portal: https://portal.azure.com/

### Learning Azure Fundamentals
- [ ] Complete "Azure Fundamentals" learning path (3-4 hours)
  - https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/
  - Focus on: Cloud concepts, Azure services, Azure architecture
- [ ] Watch: "Azure for Beginners" video series
  - https://learn.microsoft.com/en-us/shows/azure-for-beginners/
- [ ] Familiarize yourself with Azure Portal navigation
  - Explore: Dashboard, Resources, Resource Groups, All Services

### Azure CLI Setup
- [ ] Install Azure CLI
  - Windows: Download from https://aka.ms/installazurecliwindows
  - Run installer and follow prompts
- [ ] Verify installation: `az --version`
- [ ] Login to Azure: `az login`
- [ ] Set default subscription: `az account set --subscription "YOUR_SUBSCRIPTION_NAME"`

### Create Project Resource Group
- [ ] Create resource group via Portal:
  - Go to "Resource groups" → "Create"
  - Name: `lykkeogliten-rg`
  - Region: `West Europe` (or closest to Norway)
  - Click "Review + create" → "Create"
- [ ] Or create via CLI:
  ```bash
  az group create --name lykkeogliten-rg --location westeurope
  ```
- [ ] Verify resource group exists in Portal

### Documentation
- [ ] Create a document tracking your Azure learning
  - What you learned
  - Key concepts (Resource Groups, Subscriptions, Regions)
  - Questions you have
- [ ] Take screenshots of your Azure Portal setup
- [ ] Document your resource group details

## Learning Resources

### Essential Learning Paths
- [Azure Fundamentals](https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/) - START HERE
- [Azure for Beginners Videos](https://learn.microsoft.com/en-us/shows/azure-for-beginners/)

### Documentation
- [Azure Portal Overview](https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-overview)
- [Azure CLI Documentation](https://learn.microsoft.com/en-us/cli/azure/)
- [Resource Groups](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)

### Important Concepts to Understand
- **Subscription**: Billing container for Azure resources
- **Resource Group**: Logical container for related resources
- **Region**: Physical location where resources are hosted
- **Azure Portal**: Web-based management interface
- **Azure CLI**: Command-line tool for managing Azure resources

## Notes
- Don't worry about costs - the free tier is generous
- Resource groups help organize and manage related resources
- Keep your resource group name consistent: `lykkeogliten-rg`
- West Europe region is closest to Norway for best latency

## Cost Management
- [ ] Set up cost alerts in Azure Portal
  - Go to "Cost Management + Billing"
  - Set alert at $10, $25, $50
- [ ] Review "Cost Management" section to understand free tier limits

## Definition of Done
- ✅ Can log into Azure Portal successfully
- ✅ Azure CLI installed and authenticated
- ✅ Resource group `lykkeogliten-rg` exists and is visible
- ✅ Completed Azure Fundamentals learning path (or at least 50%)
- ✅ Can navigate Azure Portal confidently
- ✅ Documented key learnings and questions

---

**Epic:** EPIC 1.1 - Development Environment Setup
**Phase:** Phase 1 - Foundation & Setup
**Priority:** High
**Estimated Effort:** 4-6 hours (including learning)
