const comicMedia = [
    { type: 'image', src: 'https://files.catbox.moe/i1qhuh.png' },  
    { type: 'image', src: 'https://files.catbox.moe/4itn93.png' },  
    { type: 'image', src: 'https://files.catbox.moe/ppohyu.png' },
    { type: 'image', src: 'https://files.catbox.moe/fd141y.png' },
    { type: 'image', src: 'https://files.catbox.moe/041tbs.png' },
    { type: 'image', src: 'https://files.catbox.moe/lxc43q.png' },
    { type: 'image', src: 'https://files.catbox.moe/r2qwo2.png' },
    { type: 'image', src: 'https://files.catbox.moe/904hsp.png' },
    { type: 'image', src: 'https://files.catbox.moe/t4awbl.png' },
    { type: 'image', src: 'https://files.catbox.moe/8mlwb7.png' },
    { type: 'image', src: 'https://files.catbox.moe/9ug03o.png' },
    { type: 'image', src: 'https://files.catbox.moe/7nkpdz.png' },
    { type: 'image', src: 'https://files.catbox.moe/zk6o3i.png' },
    { type: 'image', src: 'https://files.catbox.moe/xvn4yl.png' },
    { type: 'image', src: 'https://files.catbox.moe/xvn4yl.png' },
    { type: 'image', src: 'https://files.catbox.moe/380czr.png' },
    { type: 'image', src: 'https://files.catbox.moe/5q00wn.png' },
    { type: 'image', src: 'https://files.catbox.moe/mbfbca.png' },
    { type: 'image', src: 'https://files.catbox.moe/qpy47q.png' },
    { type: 'image', src: 'https://files.catbox.moe/dbm4ir.png' }
];

let currentPage = 0;

const mediaContainer = document.querySelector('.comic-display');
const pageIndicator = document.getElementById('page-indicator');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateComicDisplay() {
    mediaContainer.innerHTML = ''; // Clear the container

    const currentMedia = comicMedia[currentPage];

    if (currentMedia.type === 'image') {
        const imgElement = document.createElement('img');
        imgElement.src = currentMedia.src;
        imgElement.alt = `Comic Page ${currentPage + 1}`;
        mediaContainer.appendChild(imgElement);
    } else if (currentMedia.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.src = currentMedia.src;
        videoElement.controls = true;
        videoElement.autoplay = true;
        mediaContainer.appendChild(videoElement);
    }

    pageIndicator.textContent = `Page ${currentPage + 1} of ${comicMedia.length}`;
}

prevBtn.addEventListener('click', () => {
    currentPage = (currentPage - 1 + comicMedia.length) % comicMedia.length;
    updateComicDisplay();
});

nextBtn.addEventListener('click', () => {
    currentPage = (currentPage + 1) % comicMedia.length;
    updateComicDisplay();
});

updateComicDisplay();
