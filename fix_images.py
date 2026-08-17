import os
import glob
import re

base_dir = r"g:\as multiverse projects\gemtara"
post_files = glob.glob(os.path.join(base_dir, "posts", "*.html"))

for file in post_files:
    slug = os.path.basename(file).replace(".html", "")
    gem_name = "lapis-lazuli" if slug.startswith("lapis-lazuli") else slug.split("-")[0]
    
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace the incorrect slug-based image path with the correct gem-based image path
    content = re.sub(r'src="\.\./images/[^"]+\.jpg"', f'src="../images/{gem_name}.jpg"', content)
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

print("Image paths fixed!")
