# GitHub Issues - Lykke og Liten Modernization

This folder contains issue templates for the Lykke og Liten website modernization project.

## Folder Structure

```
.github/issues/
├── README.md (this file)
├── phase-1/ - Foundation & Setup
├── phase-2/ - Backend Migration to Azure
├── phase-3/ - Frontend Migration to React
├── phase-4/ - Deployment & Optimization
├── phase-5/ - Testing & Quality Assurance
└── phase-6/ - Advanced Features
```

## How to Create Issues in GitHub

### Quick Method (Manual)
1. Go to your repository: https://github.com/BergitTveit/Lykkeogliten
2. Click **"Issues"** tab
3. Click **"New issue"**
4. Open the corresponding `.md` file from this folder
5. Copy the entire content
6. Paste into the GitHub issue description
7. Set the title (from the first heading)
8. Add labels (see below)
9. Assign to milestone
10. Click **"Submit new issue"**

### What Issues Are Available?

#### Phase 1: Foundation & Setup ✅ START HERE
These are your first 3 issues to create:

1. **issue-1.1.1-dev-environment-setup.md**
   - Set up React, TypeScript, Tailwind
   - Labels: `priority-critical`, `type-feature`, `tech-react`, `tech-typescript`, `tech-tailwind`, `phase-1-foundation`
   - Milestone: Foundation Complete

2. **issue-1.1.2-azure-setup.md**
   - Create Azure account and learn basics
   - Labels: `priority-high`, `type-learning`, `tech-azure`, `phase-1-foundation`
   - Milestone: Foundation Complete

3. **issue-1.2.1-document-architecture.md**
   - Document current website architecture
   - Labels: `priority-high`, `type-documentation`, `phase-1-foundation`
   - Milestone: Foundation Complete

#### Phase 2: Backend Migration to Azure
Create these after Phase 1 is mostly complete:

1. **issue-2.1.1-azure-database-setup.md**
   - Set up Azure SQL Database
   - Labels: `priority-critical`, `type-feature`, `tech-azure`, `tech-database`, `phase-2-backend`
   - Milestone: Backend Migrated

2. **More to be created...** (You can create additional issues based on the roadmap)

#### Phase 3: Frontend Migration to React
Create these after Phase 2 is in progress:

1. **issue-3.1.1-react-router-structure.md**
   - Set up React Router and navigation
   - Labels: `priority-critical`, `type-feature`, `tech-react`, `tech-typescript`, `phase-3-frontend`
   - Milestone: Frontend Rebuilt

2. **More to be created...** (You can create additional issues based on the roadmap)

## Creating Additional Issues

For user stories not yet created as issue files, you can create them directly in GitHub using this template:

```markdown
# User Story: [Title]

## Story
**As a** [role]
**I want to** [goal]
**So that** [benefit]

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Tasks
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

## Learning Resources
- [Link 1](url)
- [Link 2](url)

## Notes
- Important note 1
- Important note 2

## Definition of Done
- ✅ Done criterion 1
- ✅ Done criterion 2
- ✅ Done criterion 3

---

**Epic:** [Epic name]
**Phase:** [Phase name]
**Priority:** [Critical/High/Medium/Low]
**Estimated Effort:** [Time estimate]
```

## Labels Quick Reference

When creating each issue, add these labels:

### Every Issue Should Have:
1. **One Priority Label:** `priority-critical`, `priority-high`, `priority-medium`, or `priority-low`
2. **One Type Label:** `type-feature`, `type-bug`, `type-learning`, `type-documentation`, or `type-testing`
3. **One Phase Label:** `phase-1-foundation` through `phase-6-advanced`
4. **Technology Labels (as applicable):** `tech-azure`, `tech-react`, `tech-typescript`, `tech-tailwind`, `tech-database`

### Example Label Combinations:

**Phase 1, Issue 1.1.1:**
- `priority-critical`
- `type-feature`
- `tech-react`
- `tech-typescript`
- `tech-tailwind`
- `phase-1-foundation`

**Phase 2, Issue 2.1.1:**
- `priority-critical`
- `type-feature`
- `tech-azure`
- `tech-database`
- `phase-2-backend`

## Milestones Quick Reference

Assign each issue to the appropriate milestone:

1. **Foundation Complete** - Phase 1 issues
2. **Backend Migrated** - Phase 2 issues
3. **Frontend Rebuilt** - Phase 3 issues
4. **Production Ready** - Phase 4 issues
5. **Quality Assured** - Phase 5 issues
6. **Advanced Features** - Phase 6 issues

## Recommended Workflow

### Week 1-2: Get Started
1. Create Phase 1 issues (all 3)
2. Start with issue 1.1.1 (Dev environment setup)
3. Work on issue 1.1.2 (Azure setup) in parallel (learning)
4. Complete issue 1.2.1 (Document architecture)

### Week 3-4: Backend Foundation
1. Create Phase 2 issue 2.1.1 (Database setup)
2. Work on database setup
3. Start planning other backend issues

### Week 5+: Frontend & Beyond
1. Create Phase 3 issues as you're ready
2. Continue iterating and learning

## Tips for Managing Issues

1. **Only create issues you're ready to work on**
   - Don't create all 50+ issues at once
   - Create 3-5 issues at a time (your next sprint)

2. **Update issues as you work**
   - Check off tasks as you complete them
   - Add comments with learnings or blockers
   - Update labels if priorities change

3. **Link related issues**
   - Reference other issues with `#issue-number`
   - Example: "This depends on #3"

4. **Use project board**
   - Move issues through: Backlog → Ready → In Progress → In Review → Done
   - Only have 1-2 issues "In Progress" at a time

5. **Document your learning**
   - Add comments to issues with what you learned
   - Link to helpful resources you found
   - Note any challenges or solutions

## Getting Help

If you get stuck on an issue:
1. Add comment describing the problem
2. Add label `status-needs-help`
3. Move to "In Review" column
4. Ask for help (from me or community)

## Creating More Issue Files

If you want me to create more issue files for other user stories from the roadmap, just let me know which ones!

Priority issues to consider creating next:
- Phase 2: Content migration from WordPress
- Phase 2: Azure Functions API development
- Phase 3: Blog list page implementation
- Phase 3: Contact form implementation

---

**Happy coding and learning! 🚀**
