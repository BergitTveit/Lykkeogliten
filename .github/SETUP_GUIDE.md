# GitHub Project Setup Guide for Lykke og Liten Modernization

This guide will help you set up your GitHub Project (Kanban board) for tracking the website modernization and learning journey.

## Step 1: Create a New GitHub Project

1. Go to your repository: https://github.com/BergitTveit/Lykkeogliten
2. Click on the **"Projects"** tab at the top
3. Click **"New project"** button
4. Choose **"Board"** template (Kanban style)
5. Name it: **"Lykke og Liten - Modernization & Learning"**
6. Description: "Migration to React, TypeScript, Tailwind CSS with Azure backend - A learning journey"
7. Click **"Create project"**

## Step 2: Configure Project Board Columns

Your new project will have default columns. Rename/configure them as follows:

1. **Backlog** - Stories not yet ready to start
2. **Ready** - Stories ready to be picked up
3. **In Progress** - Currently working on
4. **In Review** - Completed, needs testing/review
5. **Done** - Fully completed

To edit columns:
- Click the **"..."** menu on each column
- Select **"Rename"** or **"Delete"**
- Click **"+ Add column"** to create new ones

## Step 3: Create Labels

Go to your repository → **Issues** → **Labels** → **"New label"**

Create the following labels:

### Priority Labels
| Label Name | Color | Description |
|------------|-------|-------------|
| `priority-critical` | `#d73a4a` (red) | Must be done immediately |
| `priority-high` | `#ff6b6b` (orange-red) | Important, do soon |
| `priority-medium` | `#fbca04` (yellow) | Normal priority |
| `priority-low` | `#0e8a16` (green) | Nice to have |

### Type Labels
| Label Name | Color | Description |
|------------|-------|-------------|
| `type-feature` | `#1d76db` (blue) | New feature or functionality |
| `type-bug` | `#d73a4a` (red) | Something isn't working |
| `type-learning` | `#a2eeef` (light blue) | Learning and research task |
| `type-documentation` | `#0075ca` (dark blue) | Documentation only |
| `type-testing` | `#7057ff` (purple) | Testing related |

### Technology Labels
| Label Name | Color | Description |
|------------|-------|-------------|
| `tech-azure` | `#0078d4` (Azure blue) | Azure related work |
| `tech-react` | `#61dafb` (React cyan) | React development |
| `tech-typescript` | `#3178c6` (TypeScript blue) | TypeScript work |
| `tech-tailwind` | `#38bdf8` (Tailwind cyan) | Tailwind CSS styling |
| `tech-database` | `#336791` (DB blue) | Database work |

### Phase Labels
| Label Name | Color | Description |
|------------|-------|-------------|
| `phase-1-foundation` | `#bfdadc` (light teal) | Phase 1: Foundation & Setup |
| `phase-2-backend` | `#c2e0c6` (light green) | Phase 2: Backend Migration |
| `phase-3-frontend` | `#fef2c0` (light yellow) | Phase 3: Frontend Migration |
| `phase-4-deployment` | `#f9d0c4` (light orange) | Phase 4: Deployment |
| `phase-5-testing` | `#d4c5f9` (light purple) | Phase 5: Testing & QA |
| `phase-6-advanced` | `#ffdaaf` (light peach) | Phase 6: Advanced Features |

### Status Labels
| Label Name | Color | Description |
|------------|-------|-------------|
| `status-blocked` | `#d93f0b` (dark red) | Blocked by something |
| `status-in-review` | `#fbca04` (yellow) | Needs review |
| `status-needs-help` | `#d876e3` (pink) | Help needed |

## Step 4: Create Milestones

Go to your repository → **Issues** → **Milestones** → **"New milestone"**

Create these 6 milestones:

### Milestone 1: Foundation Complete
- **Title:** Foundation Complete
- **Due date:** (Set your target date)
- **Description:** Development environment ready, Azure basics understood, current site documented

### Milestone 2: Backend Migrated
- **Title:** Backend Migrated
- **Due date:** (Set your target date)
- **Description:** Azure database operational, content migrated, API functional and secured

### Milestone 3: Frontend Rebuilt
- **Title:** Frontend Rebuilt
- **Due date:** (Set your target date)
- **Description:** All pages in React, TypeScript throughout, Tailwind complete, feature parity achieved

### Milestone 4: Production Ready
- **Title:** Production Ready
- **Due date:** (Set your target date)
- **Description:** Deployed to Azure, performance optimized, security hardened, custom domain configured

### Milestone 5: Quality Assured
- **Title:** Quality Assured
- **Due date:** (Set your target date)
- **Description:** All tests passing, adequate coverage, bugs fixed

### Milestone 6: Advanced Features
- **Title:** Advanced Features
- **Due date:** (Set your target date)
- **Description:** Monitoring implemented, CDN configured, admin panel operational

## Step 5: Create Issues

I've created individual markdown files for each user story in the `.github/issues/` folder.

To create each issue:
1. Go to your repository → **Issues** → **"New issue"**
2. Copy the content from the corresponding markdown file
3. Paste it into the issue description
4. Add the appropriate labels
5. Assign to the correct milestone
6. Click **"Submit new issue"**

## Step 6: Add Issues to Project

After creating issues:
1. Open each issue
2. On the right sidebar, find **"Projects"**
3. Click and select your project: "Lykke og Liten - Modernization & Learning"
4. The issue will appear in your project board (usually in "Backlog" or "Todo" column)

## Step 7: Organize Your Board

1. Drag issues from the default column to **"Backlog"**
2. Move Phase 1 issues to **"Ready"** when you're ready to start
3. As you work on an issue, move it to **"In Progress"**
4. When done, move to **"In Review"** or **"Done"**

## Recommended Workflow

1. **Start with Phase 1 issues** - These are in the `.github/issues/phase-1/` folder
2. **Work on one issue at a time** - Move it to "In Progress"
3. **Check off tasks** - As you complete tasks in the issue description
4. **Comment on issues** - Document your learning, blockers, or questions
5. **Move to review** - When you think it's done
6. **Close and move to Done** - When fully complete and tested

## Tips

- Use issue comments to document your learning journey
- Reference other issues using `#issue-number`
- Link commits to issues by including `#issue-number` in commit messages
- Take screenshots of your progress and add them to issues
- Don't be afraid to break large issues into smaller ones if needed

## Next Steps

1. ✅ Create the project board
2. ✅ Set up labels
3. ✅ Create milestones
4. ✅ Create issues for Phase 1 (start here!)
5. ⏭️ Start working on your first issue!

## Need Help?

If you get stuck:
- Comment on the issue describing the problem
- Add the `status-needs-help` label
- I can help you troubleshoot!

Good luck with your learning journey! 🚀
