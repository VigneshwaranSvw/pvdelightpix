const fs = require('fs');

const updatedHTML = `
<!-- ==============================================
     1. WEDDING STORIES
     ============================================== -->
<div id="wedding">
    <header class="story-hero">
        <div class="bg-img" data-background="../img/blog/hero_wedding.png"></div>
        <div class="overlay-gradient"></div>
        <div class="hero-inner">
            <h1>Wedding Stories</h1>
            <span>Grand Celebrations & Traditions</span>
        </div>
    </header>

    <section class="story-intro">
        <div class="container">
            <h2>Wedding Stories</h2>
            <h5>Honoring Love & Heritage</h5>
            <p>A grand celebration of love honoring traditions and family heritage. We capture the overwhelming joy, the intricate vibrant rituals, and the spectacular emotional moments that bring families together on your most important day.</p>
        </div>
    </section>

    <section class="story-grid-wrapper">
        <div class="story-grid">
            <div class="story-item big">
                <a href="../img/blog/grid_wed_1.png" data-fancybox="wedding" data-caption="A Beautiful Wedding Tradition">
                    <div class="story-img-wrap"><img src="../img/blog/grid_wed_1.png" alt="Wedding Tradition"><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item wide">
                <a href="../img/blog/s01.jpg" data-fancybox="wedding">
                    <div class="story-img-wrap"><img src="../img/blog/s01.jpg" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item tall">
                <a href="../img/2.jpg" data-fancybox="wedding">
                    <div class="story-img-wrap"><img src="../img/2.jpg" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item">
                <a href="../img/blog/s02.jpg" data-fancybox="wedding">
                    <div class="story-img-wrap"><img src="../img/blog/s02.jpg" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item">
                <a href="../img/blog/hero_wedding.png" data-fancybox="wedding">
                    <div class="story-img-wrap"><img src="../img/blog/hero_wedding.png" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
        </div>
    </section>
</div>

<!-- ==============================================
     2. PRE-WEDDING
     ============================================== -->
<div id="pre-wedding">
    <header class="story-hero">
        <div class="bg-img" data-background="../img/blog/hero_prewedding.png"></div>
        <div class="overlay-gradient"></div>
        <div class="hero-inner">
            <h1>Pre-Wedding</h1>
            <span>Beautiful Destinations</span>
        </div>
    </header>

    <section class="story-intro">
        <div class="container">
            <h2>Pre-Wedding</h2>
            <h5>Romantic Destinations</h5>
            <p>Capturing the pure romance before the big day, in striking outdoor destinations and landscapes. A relaxed, intimate showcase of simply you and your partner celebrating the anticipation.</p>
        </div>
    </section>

    <section class="story-grid-wrapper">
        <div class="story-grid">
            <div class="story-item big">
                <a href="../img/blog/grid_pre_1.png" data-fancybox="pre-wedding" data-caption="Destination Pre-Wedding">
                    <div class="story-img-wrap"><img src="../img/blog/grid_pre_1.png" alt="Pre-Wedding"><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item wide">
                <a href="../img/blog/hero_prewedding.png" data-fancybox="pre-wedding">
                    <div class="story-img-wrap"><img src="../img/blog/hero_prewedding.png" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item tall">
                <a href="../img/blog/grid_pre_2.png" data-fancybox="pre-wedding">
                    <div class="story-img-wrap"><img src="../img/blog/grid_pre_2.png" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
        </div>
    </section>
</div>

<!-- ==============================================
     3. ENGAGEMENT
     ============================================== -->
<div id="engagement">
    <header class="story-hero">
        <div class="bg-img" data-background="../img/blog/hero_engagement.png"></div>
        <div class="overlay-gradient"></div>
        <div class="hero-inner">
            <h1>Engagements</h1>
            <span>Starting the Journey</span>
        </div>
    </header>

    <section class="story-intro">
        <div class="container">
            <h2>Engagements</h2>
            <h5>Starting the Journey</h5>
            <p>The beautiful beginning of forever. We capture the magic and anticipation of your engagement, whether it's an intimate proposal or an elaborately planned rooftop session.</p>
        </div>
    </section>

    <section class="story-grid-wrapper">
        <div class="story-grid">
            <div class="story-item big">
                <a href="../img/blog/grid_eng_1.png" data-fancybox="engagement" data-caption="Golden Hour Engagement">
                    <div class="story-img-wrap"><img src="../img/blog/grid_eng_1.png" alt="Engagement"><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item tall">
                <a href="../img/blog/grid_eng_2.png" data-fancybox="engagement">
                    <div class="story-img-wrap"><img src="../img/blog/grid_eng_2.png" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item">
                <a href="../img/blog/hero_engagement.png" data-fancybox="engagement">
                    <div class="story-img-wrap"><img src="../img/blog/hero_engagement.png" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
        </div>
    </section>
</div>

<!-- ==============================================
     4. MATERNITY & BABY
     ============================================== -->
<div id="maternity">
    <header class="story-hero">
        <div class="bg-img" data-background="../img/blog/hero_maternity.png"></div>
        <div class="overlay-gradient"></div>
        <div class="hero-inner">
            <h1>Maternity & Baby</h1>
            <span>Milestone Memories</span>
        </div>
    </header>

    <section class="story-intro">
        <div class="container">
            <h2>Maternity Series</h2>
            <h5>Studio Glow & Newborns</h5>
            <p>A beautiful, intimate studio session capturing the remarkable glow of motherhood. Using soft lighting and elegant backdrops to emphasize the pure emotion of bringing new life into the world.</p>
        </div>
    </section>

    <section class="story-grid-wrapper">
        <div class="story-grid">
            <div class="story-item big">
                <a href="../img/blog/grid_mat_1.png" data-fancybox="maternity" data-caption="Studio Maternity Glow">
                    <div class="story-img-wrap"><img src="../img/blog/grid_mat_1.png" alt="Maternity"><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item tall">
                <a href="../img/blog/grid_mat_2.png" data-fancybox="maternity">
                    <div class="story-img-wrap"><img src="../img/blog/grid_mat_2.png" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item wide">
                <a href="../img/blog/hero_maternity.png" data-fancybox="maternity">
                    <div class="story-img-wrap"><img src="../img/blog/hero_maternity.png" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
        </div>
    </section>
</div>

<!-- ==============================================
     5. EVENTS & FAMILY
     ============================================== -->
<div id="events">
    <header class="story-hero">
        <div class="bg-img" data-background="../img/blog/hero_family.png"></div>
        <div class="overlay-gradient"></div>
        <div class="hero-inner">
            <h1>Events & Family</h1>
            <span>Togetherness</span>
        </div>
    </header>

    <section class="story-intro">
        <div class="container">
            <h2>Family Milestones</h2>
            <h5>Birthdays & Gatherings</h5>
            <p>Documenting the joy, chaotic fun, and precious life milestones. From spectacular 1st birthday parties to grand family reunions, we capture the magical moments that define family ties.</p>
        </div>
    </section>

    <section class="story-grid-wrapper">
        <div class="story-grid">
            <div class="story-item big">
                <a href="../img/blog/grid_evt_1.png" data-fancybox="events" data-caption="Family Celebration">
                    <div class="story-img-wrap"><img src="../img/blog/grid_evt_1.png" alt="Family Events"><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item wide">
                <a href="../img/blog/s6.jpg" data-fancybox="events">
                    <div class="story-img-wrap"><img src="../img/blog/s6.jpg" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
            <div class="story-item tall">
                <a href="../img/blog/hero_family.png" data-fancybox="events">
                    <div class="story-img-wrap"><img src="../img/blog/hero_family.png" alt=""><span class="story-zoom-icon"><i class="fas fa-search"></i></span></div>
                </a>
            </div>
        </div>
    </section>
</div>`;

let f = fs.readFileSync('subpage/our-galleries.html', 'utf8');
let startIndex = f.indexOf('<!-- ==============================================\n     1. WEDDING STORIES');
if (startIndex === -1) startIndex = f.indexOf('<!-- ==============================================\r\n     1. WEDDING STORIES');

let endIndex = f.indexOf('<!-- CTA (reusing existing call-action styles) -->');

if (startIndex > -1 && endIndex > -1) { 
    f = f.substring(0, startIndex) + updatedHTML + '\n\n' + f.substring(endIndex); 
    fs.writeFileSync('subpage/our-galleries.html', f); 
    console.log('Successfully injected completely perfect UI mapping.'); 
} else { 
    console.log('Could not find markers', startIndex, endIndex); 
}
