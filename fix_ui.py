import os
import glob
import re

base_dir = r"g:\as multiverse projects\gemtara"

# Update posts-data.js
posts_data_path = os.path.join(base_dir, "js", "posts-data.js")
with open(posts_data_path, "r", encoding="utf-8") as f:
    text = f.read()

images_generated = ['ruby', 'sapphire', 'emerald', 'diamond', 'amethyst', 'opal', 'turquoise', 'garnet', 'pearl', 'topaz', 'aquamarine']

def add_has_image(match):
    slug = match.group(1)
    has_img = 'true' if slug in images_generated else 'false'
    return f'slug: "{slug}",\n    hasImage: {has_img},'

text = re.sub(r'slug:\s*"([^"]+)",', add_has_image, text)

with open(posts_data_path, "w", encoding="utf-8") as f:
    f.write(text)

# Fix emojis in all HTML files
html_files = glob.glob(os.path.join(base_dir, "*.html"))
gem_svg = '<svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3l1 6h6"/><path d="M2 9h20"/><path d="M13 3l-1 6H6"/></svg>'
search_svg = '<svg class="icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>'

for file in html_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace("💎", gem_svg)
    content = content.replace("🔍", search_svg)
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

# Fix emojis and add hero image in posts
post_files = glob.glob(os.path.join(base_dir, "posts", "*.html"))
for file in post_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace("💎", gem_svg)
    content = content.replace("🔍", search_svg)
    content = content.replace('class="article-container"', 'class="article-body"')
    
    slug = os.path.basename(file).replace(".html", "")
    hero_html = f'<div class="article-hero-image" style="margin: 2rem 0;"><img src="../images/{slug}.jpg" alt="{slug.replace("-", " ").title()}" style="width:100%; border-radius:8px;" onerror="this.style.background=\'linear-gradient(135deg, #0D7377 0%, #0A5C5F 100%)\'; this.style.display=\'flex\'; this.src=\'\';"></div>\n<div class="article-content"'
    
    content = content.replace('<div class="article-content"', hero_html)
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

print("All fixes applied successfully!")
