#!/usr/bin/env bash
# One-time migration: download all Cloudinary images and save locally by slug.
# Run from the project root: bash scripts/migrate-images.sh

set -euo pipefail

BLOG_DIR="public/images/blog"
NOTES_DIR="public/images/dev-notes"

download() {
  local slug="$1"
  local url="$2"
  local dir="$3"
  # Determine extension from the URL's final path segment
  local filename
  filename=$(basename "${url%%\?*}")  # strip query string
  local ext="${filename##*.}"
  local dest="${dir}/${slug}.${ext}"
  if [[ -f "$dest" ]]; then
    echo "  SKIP  $dest (already exists)"
    return
  fi
  echo "  GET   $dest"
  curl -sL -H "Accept: image/webp,image/*" "$url" -o "$dest"
}

echo "=== Blog images ==="

download "a-shift-to-precision-work" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1752853300/josh-portfolio/assets_task_01k0f2yh4eenqs4jf6299vnq45_1752853179_img_0.webp" \
  "$BLOG_DIR"

download "amelie-poulain-ux-engineer" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745264875/josh-portfolio/assets_task_01jscxxd47f6qsaxehzc5adcmv_img_0.webp" \
  "$BLOG_DIR"

download "component-library-build-or-buy" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772937057/josh-portfolio/20260307_2130_UX_Engineer_s_Dilemma_simple_compose_01kk5mf0kve118jetzhhy3zkrn.png" \
  "$BLOG_DIR"

download "component-library-for-multi-framework-teams" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772939496/josh-portfolio/20260307_2210_Image_Generation_simple_compose_01kk5psekae8094pyvzd2zd4a0.png" \
  "$BLOG_DIR"

download "component-library-requirements" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772938565/josh-portfolio/20260307_2155_Image_Generation_simple_compose_01kk5nwjhzf5wspkh35zj994yq.png" \
  "$BLOG_DIR"

download "cross-functional-team-collaboration" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743963713/josh-portfolio/assets_task_01jr6589gne0h9rjapex810m08_img_0.webp" \
  "$BLOG_DIR"

download "design-system-audit" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772832329/josh-portfolio/20260306_1624_Friendly_UX_Engineering_simple_compose_01kk2gj3wzfect22q2fcgb5nwr.png" \
  "$BLOG_DIR"

download "design-system-tokens" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772937784/josh-portfolio/20260307_2142_Image_Generation_simple_compose_01kk5n5vb0e7wvah7dxysv9dt8.png" \
  "$BLOG_DIR"

download "design-systems-are-easy-until-you-ship-one" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772682841/josh-portfolio/20260304_2252_Image_Generation_simple_compose_01kjy20dbsfdrr674m4ba5wm0r.png" \
  "$BLOG_DIR"

download "design-systems-for-the-rest-of-us" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1746369173/josh-portfolio/assets_task_01jtdv9wbkem5r50p1yxnnqpvb_1746369114_img_0.webp" \
  "$BLOG_DIR"

download "dwight-schrute-ux-engineer" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745851582/josh-portfolio/assets_task_01jsydq8k5ek98tww1ppe3dc7r_1745851552_img_0.webp" \
  "$BLOG_DIR"

download "figma-to-code-workflow" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772940876/josh-portfolio/20260307_2233_Image_Generation_simple_compose_01kk5r2jkqe50vkkx4zpsfn56n.png" \
  "$BLOG_DIR"

download "forrest-gump-ux-engineer" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745252408/josh-portfolio/assets_task_01jschr2wafjf8hks8ths3jz2t_img_0.webp" \
  "$BLOG_DIR"

download "front-end-carpentry" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1744900289/josh-portfolio/assets_task_01js22ajq3emdaphyvchamy2d5_img_0.webp" \
  "$BLOG_DIR"

download "how-to-assess-ux-engineering-outcomes" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743962937/josh-portfolio/assets_task_01jr64g84beg6t7tcdqqkhzccc_img_0.webp" \
  "$BLOG_DIR"

download "invisible-work" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745850929/josh-portfolio/assets_task_01jsyd2aywecbt350e85ffwwtf_1745850867_img_0.webp" \
  "$BLOG_DIR"

download "making-accessibility-feel-less-like-a-buzzword" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745852354/josh-portfolio/assets_task_01jsyeevc3fyzsmsdzpmypg4p6_1745852329_img_0.webp" \
  "$BLOG_DIR"

download "ron-swanson-ux-engineer" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745851667/josh-portfolio/assets_task_01jsydsemre5p8ny253ck44386_1745851626_img_0.webp" \
  "$BLOG_DIR"

download "student-mindset" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745935639/josh-portfolio/assets_task_01jt0xvxb2fffvrp6s52je2hej_1745935597_img_0.webp" \
  "$BLOG_DIR"

download "ted-lasso-ux-engineer" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745261834/josh-portfolio/assets_task_01jscrb5fefj0rm0p4hzpwcm00_img_0.webp" \
  "$BLOG_DIR"

download "the-ghosts-of-codes-past" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1746631757/josh-portfolio/assets_task_01jtnn5dqsfy6svvg0yg1xdxbt_1746631115_img_0.webp" \
  "$BLOG_DIR"

download "the-luckiest-guy-in-tech" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1746208059/josh-portfolio/assets_task_01jt91nja6eehvgyhdhw0qp05e_1746208014_img_0.webp" \
  "$BLOG_DIR"

download "the-reality-of-working-in-ui-ux-right-now" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1748009339/josh-portfolio/assets_task_01jvyqe2s0ej2asb8rtx2jx2cw_1748009241_img_0.webp" \
  "$BLOG_DIR"

download "they-beat-the-care-out-of-me" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1748102211/josh-portfolio/assets_task_01jw1g1c72e9q85pc0g3dgbshc_1748102137_img_1.webp" \
  "$BLOG_DIR"

download "twenty-years-of-front-end-mayhem" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745185005/josh-portfolio/assets_task_01jsahvg61efssrzm2pmnep1pa_img_0.webp" \
  "$BLOG_DIR"

download "what-is-a-ux-engineer" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1743962453/josh-portfolio/assets_task_01jr640wp5fhkbhaf2tvrataca_img_0.webp" \
  "$BLOG_DIR"

echo ""
echo "=== Dev-notes images ==="

download "accessibility-audit-cheatsheet" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1772940161/josh-portfolio/20260307_2221_Image_Generation_simple_compose_01kk5qccaxfc5ayx484dj1p8nc.png" \
  "$NOTES_DIR"

download "aria-pattern-cheatsheet" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1745245227/josh-portfolio/assets_task_01jscbab7dekctaz7mx7356yxp_img_0.webp" \
  "$NOTES_DIR"

download "common-string-methods-i-use" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747840698/josh-portfolio/assets_task_01jvspmqeyek1ag6z579gaqhb0_1747840627_img_0.webp" \
  "$NOTES_DIR"

download "css-cheat-sheet" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747854516/josh-portfolio/assets_task_01jvt3tc9vfj7b24h9jabzn9e0_1747854456_img_2.webp" \
  "$NOTES_DIR"

download "how-to-archive-multiple-github-repos" \
  "https://res.cloudinary.com/dwjulenau/image/upload/ar_3:2,c_fill,dpr_auto,f_auto,fl_progressive,q_auto/v1766942768/josh-portfolio/github-automation.png" \
  "$NOTES_DIR"

download "javascript-cheat-sheet" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747854266/josh-portfolio/assets_task_01jvt3kmvmf92ajfb9ynn1je8c_1747854234_img_1.webp" \
  "$NOTES_DIR"

download "javascript-dates" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1747076064/josh-portfolio/assets_task_01jv2xcacpf9e8442cz03j7b86_1747075929_img_0.webp" \
  "$NOTES_DIR"

download "netlify-nuxt-form-troubleshooting" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1745983435/josh-portfolio/assets_task_01jt2bea62fmnam8yqha1nb72d_1745983373_img_0.webp" \
  "$NOTES_DIR"

download "stencil-cheat-sheet" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1748818817/josh-portfolio/assets_task_01jwpve66ef7899m8z3zjgmxhr_1748818728_img_1.webp" \
  "$NOTES_DIR"

echo ""
echo "=== Project images ==="
PROJECTS_DIR="public/images/projects"

download "americas-test-kitchen" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1743990869/josh-portfolio/assets_task_01jr6z5kt8efcsevzqzwek0gse_img_0.webp" \
  "$PROJECTS_DIR"

download "berxi-insurance" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1743991012/josh-portfolio/assets_task_01jr6z0n1bfqgrjwndjfn3v2q3_img_0.webp" \
  "$PROJECTS_DIR"

download "ivfcryo" \
  "https://res.cloudinary.com/dwjulenau/image/upload/dpr_auto,f_auto,fl_progressive,q_auto/v1744917502/josh-portfolio/assets_task_01js2js43afnqt5m68bxjmmd81_img_0.webp" \
  "$PROJECTS_DIR"

echo ""
echo "Done. Verify downloaded files:"
ls -lh "$BLOG_DIR"
echo ""
ls -lh "$NOTES_DIR"
echo ""
ls -lh "$PROJECTS_DIR"
