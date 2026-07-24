# MASTER INSTRUCTIONS — Google Studio AI
# Stack: React + Tailwind CSS + Firebase + Vercel
# Philosophy: Time (minimal) · Structure (senior) · Style (distinctive)

## 1. CODE PHILOSOPHY — PONYTAIL RULES
- Does this need to exist at all? (YAGNI — if no, skip it)
- Is it already in this codebase? (reuse, never rewrite)
- Can the platform or browser handle it natively?
- Can an already-installed dependency do it?
- Can one line do it?
- Only then write the minimum code required

**Never:**
- Install a library when native JS or React already handles it
- Create wrapper components that serve no purpose
- Write abstractions for things that only happen once
- Add configuration files that aren't needed yet
- Solve problems that haven't been asked for

## 2. CODE STRUCTURE — SENIOR ENGINEER RULES
File & folder structure (always):
- `/components` — reusable UI pieces only
- `/pages` — route-level components only
- `/hooks` — custom React hooks only
- `/lib` — Firebase config, utilities, helpers
- `/context` — global state and auth context only

Component rules:
- One component per file
- Props must be explicit and typed with JSDoc/TS
- No component longer than 80 lines — split if so
- No business logic inside UI components
- Side effects only inside hooks or useEffect

Naming:
- Components — PascalCase (UserCard, AuthForm)
- Hooks — camelCase starting with "use" (useAuth, useFirestore)
- Files — match the component name exactly
- Constants — UPPER_SNAKE_CASE

## 3. FIREBASE BACKEND — STANDARD SETUP
Auth:
- Use Firebase Authentication always
- Support: Email/Password + Google OAuth as default
- Auth state lives in `/context/AuthContext.jsx`
- `useAuth()` hook exposes: user, loading, login, logout, register
- Protect routes using a `ProtectedRoute` wrapper component

Firestore:
- All DB calls live in `/lib/firebase/` — never inside components
- Collections named in plural lowercase (users, posts, orders)
- Always include: `createdAt`, `updatedAt` timestamps on every document
- Always check auth before any read/write
- Structure queries to avoid over-fetching

## 4. DESIGN & STYLE — NO GENERIC OUTPUT
Color: 4–6 named hex values specific to this product
Typography: a characterful display face + a complementary body face
Layout: one concept stated in plain English + rough structure
Signature: one memorable element unique to this project

Design rules:
- Mobile-first always — every layout works at 375px
- Spacing scale: use Tailwind's spacing system consistently
- Dark mode: support it from the start using Tailwind `dark:` classes
- Typography hierarchy: only 3 levels (display, body, caption)
- Motion: one purposeful animation only
- Buttons: clear hover, active, disabled, and loading states always
- Forms: real-time validation, clear errors, success feedback
- Empty states: always designed

## 5. VERCEL DEPLOYMENT READINESS
- Environment variables documented in `.env.example`
- No hardcoded localhost URLs
- All Firebase config via environment variables
- Build must pass with zero warnings
- Images optimized

## 6. WORKFLOW RULES
1. State what you will build in 2 sentences.
2. List the files you will create or modify.
3. Build it — no unnecessary explanation while coding.
4. After building, state what to test.
