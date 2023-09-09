import { v4 as uuidv4 } from 'uuid';
const data = {
  speakers: [
    {
      id: uuidv4(),
      title: 'Tesla Autopilot',
      imgUrl: './speakers/cover.svg',
      socials: {},
    },
    {
      id: uuidv4(),
      title: 'Self–confidence',
      imgUrl: './speakers/cover (1).svg',
      socials: {},
    },
    {
      id: uuidv4(),
      title: 'Perplexed Mind',
      imgUrl: './speakers/cover (2).png',
      socials: {},
    },
    {
      id: uuidv4(),
      title: 'Women’s Rights',
      imgUrl: './speakers/cover (3).png',
      socials: {},
    },
    {
      id: uuidv4(),
      title: 'Social Class',
      imgUrl: './speakers/cover (4).png',
      socials: {},
    },
  ],
  reviews: [
    {
      id: uuidv4(),
      name: 'Luna Lovegood',
      title:
        "I absolutely love 'Tech Talk with Experts'! The host brings in such knowledgeable guests who dive deep into the latest tech trends. It's like having a tech guru in my pocket. I've learned so much about AI, blockchain, and other cutting-edge topics. Highly recommend!",
      imgUrl: './images/reviewers-image/avatar.png',
      socialsUrl: './svgs/social/googlePodcast.svg',
    },
    {
      id: uuidv4(),
      name: 'Mia Winters',
      title:
        "This podcast has been a game-changer for me. It's not just about tech jargon; they break it down in a way that even non-techies like me can understand. Plus, the production quality is top-notch. I'm hooked!",
      imgUrl: './images/reviewers-image/avatar (1).png',
      socialsUrl: './svgs/social/spotify.svg',
    },
    {
      id: uuidv4(),
      name: 'Emily Blunt',
      title:
        "'Exploring the Unknown' is the perfect companion for my long commutes. The host's storytelling is captivating, and the topics they cover are so diverse. From unsolved mysteries to the wonders of the universe, it's a journey of curiosity and wonder.",
      imgUrl: './images/reviewers-image/avatar (2).png',
      socialsUrl: './svgs/social/applePodcast.svg',
    },
  ],
  memberships: [
    {
      id: uuidv4(),
      imgUrl: './images/membership/Scribble.png',
      title: 'Topic by Request',
      text: 'As a member, you have the power to influence the content we create. Suggest and vote on topics, and we`ll tailor our content to your interests. Your voice matters in shaping our future discussions and offerings.',
    },
    {
      id: uuidv4(),
      imgUrl: './images/membership/Shining stars.png',
      title: 'Exclusive Content',
      text: 'Get access to a treasure trove of exclusive content that`s unavailable to non-members. Dive into in-depth articles, videos, podcasts, and more, crafted specifically for you. You`ll be the first to enjoy this premium material.',
    },
    {
      id: uuidv4(),
      imgUrl: './images/membership/Face 1.png',
      title: 'Join the Community',
      text: 'Membership grants you entry into our vibrant community of enthusiasts and experts. Connect with like-minded individuals, engage in discussions, share experiences, and forge lasting connections with people who share your passions.',
    },
    {
      id: uuidv4(),
      imgUrl: './images/membership/Face 5.png',
      title: 'Livestreaming Access',
      text: "Don't miss out on live events and broadcasts. Your membership ensures you`re front and center for livestreamed sessions, Q&A sessions with experts, and behind-the-scenes glimpses of our activities.",
    },
    {
      id: uuidv4(),
      imgUrl: './images/membership/Fire.png',
      title: 'Exclusive Episodes & Merch',
      text: 'Enjoy members-only episodes of our content. Dive deeper into the subjects you love with extended episodes and gain access to exclusive merchandise like limited edition apparel, collectibles, and more.',
    },
    {
      id: uuidv4(),
      imgUrl: './images/membership/Star.png',
      title: 'And much more!',
      text: 'Our commitment to our members goes beyond these benefits. Expect surprises, early announcements, special giveaways, and continuous improvements to enhance your membership experience. Your support drives our creativity and innovation.',
    },
  ],

  episodes: [
    {
      id: 1,
      title: 'Pandemic Becoming Endemic',
      text: 'From Pandemic to Endemic: Adapting to a New Health Reality',
      imgUrl: './speakers/cover5.svg',
      socials: {},
      tags: ['covid-19', 'health'],
    },
    {
      id: 2,
      title: 'Tesla Autopilot Controversy',
      imgUrl: './speakers/cover.svg',
      text: "Tesla's Autopilot: Innovation, Automation, and Ethical Dilemmas",
      socials: {},
      tags: ['automation', 'tech'],
    },
    {
      id: 3,
      title: "Women's Rights? Is it alright?",
      text: 'Empowering Women: Challenges, Progress, and Future Advocacy',
      imgUrl: './speakers/cover (3).png',
      socials: {},
      tags: ['women’s rights'],
    },
    {
      id: 4,
      title: 'How to Deal with Self–Confidence',
      text: 'Building Self-Confidence: Overcoming Doubt and Achieving Success',
      imgUrl: './speakers/cover (1).svg',
      socials: {},
      tags: ['self-esteem', 'health'],
    },
    {
      id: 5,
      title: 'Type of Social Classes of People',
      text: 'Social Classes Explored: Impacts and Aspirations in Society',
      imgUrl: './speakers/cover (4).png',
      socials: {},
      tags: ['social class', 'wealth'],
    },
    {
      id: 6,
      title: 'Are you a Perplexed Mind Person?',
      text: 'Understanding the Perplexed Mind: Behavior, Health, and Clarity',
      imgUrl: './speakers/cover (2).png',
      socials: {},
      tags: ['mind-behaviour', 'health'],
    },
  ],
  sponsors: [
    {
      id: uuidv4(),
      type: 'Member',
      popular: false,
      title:
        'Unlock Exclusive Content, Discounts, and Community Access for Just $9.99',
      cost: '$9.99',
      included: [
        '• Exclusive Content',
        '• 5% Discount on Merch',
        '• Join the Community',
        '• Livestreaming Access',
      ],
    },
    {
      id: uuidv4(),
      type: 'Family',
      popular: true,
      title:
        'Join the Family: Get Exclusive Access, Merch, and Promotional Opportunities for $14.99!',
      cost: '$14.99',
      included: [
        '• Everything in Tier 1',
        '• Free tickets to Events',
        '• Limited Edition Merch',
        '• Promote your Product',
        '• Request Topic',
      ],
    },
    {
      id: uuidv4(),
      type: 'Official',
      popular: false,
      title:
        'Go Official: Early Access, Exclusive Badge, and Free Merch for $29.99!',
      cost: '$29.99',
      included: [
        '• Everything in Tier 2',
        '• Exclusive Badge on Livestreaming',
        '• Become an Official Sponsor',
        '• Early Access to All Episodes',
        '• Free Stikers and Merch',
      ],
    },
  ],
  posts: [
    {
      id: 1,
      imgUrl: '.././article/img.png',
      type: 'PODCAST',
      title: 'Setup Your Own Podcast',
      subtitle:
        'Learn how to create your podcast from scratch and join the world of business, podcasting, and startups.',
      tag: ['business', 'podcast', 'startup'],
      date: 'Sep 14, 2021',
      socials: {},
    },
    {
      id: 2,
      imgUrl: '.././article/img (1).png',
      type: 'TIPS & TRICK',
      title: 'Doodle Artwork 101',
      subtitle:
        'Master the art of doodling with essential tips and tricks, sparking your creativity and artistic skills.',
      tag: ['art', 'tips and tricks', 'creative'],
      date: 'Sep 12, 2021',
      socials: {},
    },
    {
      id: 3,
      imgUrl: '.././article/img (2).png',
      type: 'NEWS',
      title: 'Mother Nature Taking Over',
      subtitle:
        'Stay updated on the latest news regarding the powerful impact of nature on our world.',
      tag: ['news', 'nature'],
      date: 'Sep 10, 2021',
      socials: {},
    },
    {
      id: 4,
      imgUrl: '.././article/img (3).png',
      type: 'PRODUCTIVITY',
      title: 'How to Be Productive',
      subtitle:
        'Elevate productivity with effective strategies and a positive mindset, unlocking your full potential.',
      tag: ['productivity', 'mindset'],
      date: 'Sep 8, 2021',
      socials: {},
    },
  ],
  members: [
    {
      id: uuidv4(),
      count: 76,
      title: 'Community Members',
    },
    {
      id: uuidv4(),
      count: 128,
      title: 'Podcast Subscribers ',
    },
    {
      id: uuidv4(),
      count: 59,
      title: 'Daily Listeners',
    },
  ],
  founders: [
    {
      id: uuidv4(),
      name: 'Porter Severus',
      title:
        'Co-Founder Extraordinaire, Guiding Our Journey Towards Excellence with Vision, Innovation, and Unwavering Dedication to Success',
      imgUrl: './about-images/avatar.png',
      iconUrl: './about-images/Face 1.png',
      socials: {},
    },
    {
      id: uuidv4(),
      name: 'Marques Keith',
      iconUrl: './about-images/Star.png',
      title:
        'Co-Founder and Creative Visionary Driving Innovation and Success in Our Endeavors.',
      imgUrl: './about-images/avatar (1).png',
      socials: {},
    },
  ],
  sponsorsSays: [
    {
      id: uuidv4(),
      title:
        "I absolutely love 'Tech Talk with Experts'! The host brings in such knowledgeable guests who dive deep into the latest tech trends. It's like having a tech guru in my pocket. I've learned so much about AI, blockchain, and other cutting-edge topics. Highly recommend!",
      imgUrl: './about-images/sponsors-image/Google Podcast.png',
    },
    {
      id: uuidv4(),
      title:
        "I absolutely love 'Tech Talk with Experts'! The host brings in such knowledgeable guests who dive deep into the latest tech trends. It's like having a tech guru in my pocket. I've learned so much about AI, blockchain, and other cutting-edge topics. Highly recommend!",
      imgUrl: './about-images/sponsors-image/Spotify.png',
    },
    {
      id: uuidv4(),
      title:
        "I absolutely love 'Tech Talk with Experts'! The host brings in such knowledgeable guests who dive deep into the latest tech trends. It's like having a tech guru in my pocket. I've learned so much about AI, blockchain, and other cutting-edge topics. Highly recommend!",
      imgUrl: './about-images/sponsors-image/Youtube.png',
    },
  ],
};

export default data;
