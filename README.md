# Building Jekyll Website

## Main problem
- Want to serve note html which conveniently includes note_section files
- Originally approach: note layout --> note_section layout
- But unable to render as desired the content e.g. html or markdown raw text directly shown instead of the rendered form


## Solution
- Have only one layout which is note layout, delete the note_section layout
- Still have `_note_section` folder, instead of regular note_section folder so note_section files can be retrieved from .site


## How to use
- When we have new notes to add, first create a note md using the note layout and place in `_notes`. Set the title, layout and topic
- Then in `_note_sections`, create a folder matching the topic name above, and in it you can create the markdown content files. Name these files with \<number to appear in order\>\_\<section name\>, give a section_title front matter for it to appear in the page
- Type the note_section content in markdown. Only use html syntax when you need very complicated representation
	- Common regular markdown syntax:
		- Double space for newline
		- Enclose with `**` for bolding
		- `#`'s for headers
		- `|` and `----`'s for table construction, ensure the table is sandwiched by empty lines above and below
	- Enclose with `$` for inline math formula
	- Enclose with tripe backticks "\`\`\`" and optionally the language for code snippets
	- For mermaid diagrams, enclose inside the md file with `<div class="mermaid"> </div>` (or `pre` tags) since we are using dynamic js approach instead of jekyll plugins that may convert to static image
- Remember to have the note_sections folder under collections in `_config.yml` so it becomes a Jekyll collection for retrieval of through .site
- For local running, type `jekyll serve` and check your local host website

## Example of adding content
- Say we want to add a note of topic `astronomy`, go to the `_notes` folder to create `astronomy.md`
	- Inside, place front matters 
		``` 
		---
		title: Astronomy (or any title you want to display)
		layout: note
		topic: astronomy (must match later)
		---  
		any text you want
		```
								  
- Now go to `_note_sections` to create a folder named `astronomy`, must match the topic above.
- Inside the `astronomy` folder, create markdown files of your section content named with ordering followed by section name e.g.  `1_celestial_mechan.md`, `2_general_relativity.md`
	- Inside `1_celestial_mech.md`, place front matter 
		```
		---
		section_title: Celestial Mechanics (or any section title you want to display)
		---
		real content about celestial mechanics
		```

								 