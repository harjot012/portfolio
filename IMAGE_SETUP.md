# Project screenshots

The Adaptive RAG diagram is already included in `public/projects/adaptive-rag.png` and wired to its project card.

For the other three featured projects, copy your existing screenshots into `public/projects/` using these names:

- `ev-charging.png`
- `hsg-tutoring.png`
- `wellwork.png`

Then in `src/data/projects.ts`, add the following property to each matching project object (before its closing brace):

`image:'/projects/ev-charging.png'` (and similarly for the other two).

The portfolio continues to show its original CSS project artwork until you do this. This avoids broken images.

The CV is in `public/Harjot_Kaur_CV.pdf`.
