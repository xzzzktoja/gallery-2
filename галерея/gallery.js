// ================= БАЗА ДАННЫХ =================
let paintings = [];

function loadFromStorage() {
  const stored = localStorage.getItem('art_gallery_museum');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        paintings = parsed;
        return;
      }
    } catch (e) {}
  }
  // Начальные шедевры + Лувр
  paintings = [
    { id: Date.now() + 101, title: "Мона Лиза (Джоконда)", author: "Леонардо да Винчи", category: "Портрет", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", dateAdded: Date.now() + 101 },
    { id: Date.now() + 102, title: "Свадебный пир в Кане Галилейской", author: "Паоло Веронезе", category: "Исторический", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Paolo_Veronese_-_The_Wedding_at_Cana_-_WGA24959.jpg", dateAdded: Date.now() + 102 },
    { id: Date.now() + 103, title: "Свобода, ведущая народ", author: "Эжен Делакруа", category: "Исторический", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg", dateAdded: Date.now() + 103 },
    { id: Date.now() + 104, title: "Плот «Медузы»", author: "Теодор Жерико", category: "Исторический", image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg", dateAdded: Date.now() + 104 },
    { id: Date.now() + 105, title: "Коронация Наполеона", author: "Жак-Луи Давид", category: "Исторический", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Coronation_of_Napoleon_%28Jacques-Louis_David%2C_1806%29.jpg", dateAdded: Date.now() + 105 },
    { id: Date.now() + 106, title: "Кружевница", author: "Ян Вермеер", category: "Портрет", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Johannes_Vermeer_-_The_Lacemaker_%28c.1669-1670%29.jpg", dateAdded: Date.now() + 106 },
    { id: Date.now() + 107, title: "Мадонна со Святой Анной", author: "Леонардо да Винчи", category: "Религиозный", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Leonardo_da_Vinci_-_S._Anne%2C_la_Vierge_et_l%27Enfant_J%C3%A9sus_esquissant_un_agneau.jpg", dateAdded: Date.now() + 107 },
    { id: Date.now() + 108, title: "Большая одалиска", author: "Жан Огюст Доминик Энгр", category: "Портрет", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Ingre_-_La_Grande_Odalisque.jpg", dateAdded: Date.now() + 108 },
    { id: Date.now() + 109, title: "Клятва Горациев", author: "Жак-Луи Давид", category: "Исторический", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/David-Oath_of_the_Horatii-1786.jpg", dateAdded: Date.now() + 109 },
    { id: Date.now() + 110, title: "Мадонна в скалах", author: "Леонардо да Винчи", category: "Религиозный", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28Louvre%29.jpg", dateAdded: Date.now() + 110 },
    { id: Date.now() + 111, title: "Прекрасная садовница", author: "Рафаэль Санти", category: "Религиозный", image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Raphael_-_La_belle_jardini%C3%A8re.jpg", dateAdded: Date.now() + 111 },
    { id: Date.now() + 1, title: "Звёздная ночь", author: "Винсент Ван Гог", category: "Природа", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", dateAdded: Date.now() - 10000 },
    { id: Date.now() + 2, title: "Мона Лиза", author: "Леонардо да Винчи", category: "Портрет", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg", dateAdded: Date.now() - 9000 },
    { id: Date.now() + 3, title: "Крик", author: "Эдвард Мунк", category: "Абстракция", image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg", dateAdded: Date.now() - 8000 },
    { id: Date.now() + 4, title: "Рождение Венеры", author: "Боттичелли", category: "Мифология", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Birth_of_Venus_Botticelli.jpg", dateAdded: Date.now() - 7000 },
    { id: Date.now() + 5, title: "Поцелуй", author: "Густав Климт", category: "Портрет", image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Gustav_Klimt_016.jpg", dateAdded: Date.now() - 6000 }
  ];
}

function saveToStorage() {
  localStorage.setItem('art_gallery_museum', JSON.stringify(paintings));
}

// ================= ФОН СЛАЙД-ШОУ =================
const backgroundImages = ['./image/1.jpeg', './image/2.jpeg', './image/3.jpeg'];
let currentBgIndex = 0;
let bgInterval;

function preloadBackgroundImages() {
  backgroundImages.forEach(src => { const img = new Image(); img.src = src; });
}

function changeBackgroundImage() {
  if (backgroundImages.length === 0) return;
  document.body.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;
  currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
}

function initBackgroundSlideshow(intervalMs = 10000) {
  if (backgroundImages.length === 0) {
    document.body.style.backgroundColor = '#1a120b';
    return;
  }
  preloadBackgroundImages();
  changeBackgroundImage();
  if (bgInterval) clearInterval(bgInterval);
  bgInterval = setInterval(changeBackgroundImage, intervalMs);
}

// ================= ВСПОМОГАТЕЛЬНЫЕ =================
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, m => m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;');
}

function deleteArtById(id) {
  paintings = paintings.filter(p => p.id !== id);
  saveToStorage();
  updateAuthorFilter();
  renderGallery();
}

async function downloadImage(imageSrc, title) {
  try {
    if (imageSrc.startsWith('data:')) {
      const link = document.createElement('a');
      link.href = imageSrc;
      link.download = `${title.replace(/[^a-z0-9]/gi, '_')}.png`;
      link.click();
      return;
    }
    const response = await fetch(imageSrc, { mode: 'cors', referrerPolicy: 'no-referrer' });
    if (!response.ok) throw new Error();
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `${title.replace(/[^a-z0-9]/gi, '_')}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    alert('⚠️ Скачивание недоступно (CORS). Откроется оригинал.');
    window.open(imageSrc, '_blank');
  }
}

// ================= СОРТИРОВКА =================
let currentSort = 'date_new';

function sortPaintings(paintingsArray) {
  const sorted = [...paintingsArray];
  switch (currentSort) {
    case 'date_new':
      return sorted.sort((a, b) => b.dateAdded - a.dateAdded);
    case 'date_old':
      return sorted.sort((a, b) => a.dateAdded - b.dateAdded);
    case 'author_asc':
      return sorted.sort((a, b) => a.author.localeCompare(b.author));
    case 'title_asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

// ================= ФИЛЬТР ПО АВТОРАМ =================
let currentAuthorFilter = 'all';

function updateAuthorFilter() {
  const authorSelect = document.getElementById('authorFilter');
  if (!authorSelect) return;
  const authorsSet = new Set();
  paintings.forEach(p => { if (p.author) authorsSet.add(p.author); });
  const authors = Array.from(authorsSet).sort();
  const oldValue = authorSelect.value;
  authorSelect.innerHTML = '<option value="all">👨‍🎨 Все авторы</option>';
  authors.forEach(author => {
    const option = document.createElement('option');
    option.value = author;
    option.textContent = author;
    authorSelect.appendChild(option);
  });
  if (oldValue !== 'all' && authors.includes(oldValue)) {
    authorSelect.value = oldValue;
    currentAuthorFilter = oldValue;
  } else {
    authorSelect.value = 'all';
    currentAuthorFilter = 'all';
  }
}

// ================= ОТРИСОВКА ГАЛЕРЕИ =================
let currentFilterCategory = 'all';
let currentSearchQuery = '';

function renderGallery() {
  const galleryContainer = document.getElementById('galleryContainer');
  if (!galleryContainer) return;
  let filtered = [...paintings];
  if (currentFilterCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilterCategory);
  }
  if (currentAuthorFilter !== 'all') {
    filtered = filtered.filter(p => p.author === currentAuthorFilter);
  }
  if (currentSearchQuery.trim() !== '') {
    const query = currentSearchQuery.trim().toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.author.toLowerCase().includes(query)
    );
  }
  filtered = sortPaintings(filtered);
  if (filtered.length === 0) {
    galleryContainer.innerHTML = `<div class="empty-gallery">✨ Экспонаты не найдены... Добавьте свой шедевр ✨</div>`;
    return;
  }
  galleryContainer.innerHTML = '';
  filtered.forEach(art => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img class="card-img" src="${art.image}" alt="${escapeHtml(art.title)}" loading="lazy" onerror="this.src='https://placehold.co/600x400/8b5a2b/f5e8d2?text=Image+not+found'">
      <div class="card-content">
        <h3>${escapeHtml(art.title)}</h3>
        <div class="author-badge">🎨 ${escapeHtml(art.author)}</div>
        <div class="category-badge">📂 ${escapeHtml(art.category)}</div>
        <div class="actions">
          <button class="download-btn" data-id="${art.id}">⬇️ Скачать</button>
          <button class="delete-btn" data-id="${art.id}">🗑️ Удалить</button>
        </div>
      </div>
    `;
    const imgElement = card.querySelector('.card-img');
    imgElement.addEventListener('click', () => openLightbox(art));
    card.querySelector('.delete-btn').addEventListener('click', () => deleteArtById(art.id));
    card.querySelector('.download-btn').addEventListener('click', () => downloadImage(art.image, art.title));
    galleryContainer.appendChild(card);
  });
}

// ================= ЛАЙТБОКС С БОЛЬШОЙ КВАДРАТНОЙ ЛУПОЙ =================
function openLightbox(art) {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  if (lightbox && lightboxImage && lightboxCaption) {
    lightboxImage.src = art.image;
    lightboxCaption.innerText = `${art.title} — ${art.author}`;
    lightbox.classList.add('active');
    initLightboxMagnifier(lightboxImage);
  }
}

function initLightboxMagnifier(imgElement) {
  const magnifier = document.getElementById('lightboxMagnifier');
  if (!magnifier) return;
  
  // Устанавливаем размеры квадратной лупы
  magnifier.style.width = '250px';
  magnifier.style.height = '250px';
  magnifier.style.borderRadius = '12px'; // скругленные углы, но не круг
  
  function showMagnifier(e) {
    const rect = imgElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Выход за границы
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      magnifier.style.display = 'none';
      return;
    }
    
    magnifier.style.display = 'block';
    // Позиционируем квадрат справа/снизу от мыши, чтобы не перекрывать курсор
    let leftPos = e.clientX + 25;
    let topPos = e.clientY + 25;
    // Если вылезает за правый край экрана, показываем слева
    if (leftPos + magnifier.offsetWidth > window.innerWidth) {
      leftPos = e.clientX - magnifier.offsetWidth - 25;
    }
    // Если вылезает за нижний край, показываем сверху
    if (topPos + magnifier.offsetHeight > window.innerHeight) {
      topPos = e.clientY - magnifier.offsetHeight - 25;
    }
    magnifier.style.left = leftPos + 'px';
    magnifier.style.top = topPos + 'px';
    
    const zoom = 3; // 3-кратное увеличение
    const bgWidth = rect.width * zoom;
    const bgHeight = rect.height * zoom;
    const bgX = (x * zoom) - (magnifier.offsetWidth / 2);
    const bgY = (y * zoom) - (magnifier.offsetHeight / 2);
    
    magnifier.style.backgroundImage = `url('${imgElement.src}')`;
    magnifier.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
    magnifier.style.backgroundPosition = `-${bgX}px -${bgY}px`;
  }
  
  function hideMagnifier() {
    magnifier.style.display = 'none';
  }
  
  imgElement.addEventListener('mousemove', showMagnifier);
  imgElement.addEventListener('mouseleave', hideMagnifier);
  
  // При закрытии лайтбокса убираем обработчики
  const lightbox = document.getElementById('lightboxModal');
  const removeListeners = () => {
    imgElement.removeEventListener('mousemove', showMagnifier);
    imgElement.removeEventListener('mouseleave', hideMagnifier);
    lightbox.removeEventListener('lightboxClosed', removeListeners);
  };
  lightbox.addEventListener('lightboxClosed', removeListeners);
}

// ================= МОДАЛЬНОЕ ОКНО =================
let currentImageData = null;

function resetModalFields() {
  const titleInput = document.getElementById('artTitle');
  const authorInput = document.getElementById('artAuthor');
  const categorySelect = document.getElementById('artCategory');
  const fileInput = document.getElementById('imageFileInput');
  const urlInput = document.getElementById('imageUrlInput');
  const previewImg = document.getElementById('imagePreview');
  if (titleInput) titleInput.value = '';
  if (authorInput) authorInput.value = '';
  if (categorySelect) categorySelect.value = 'Портрет';
  if (fileInput) fileInput.value = '';
  if (urlInput) urlInput.value = '';
  if (previewImg) {
    previewImg.style.display = 'none';
    previewImg.src = '';
  }
  currentImageData = null;
}

function initModal() {
  const modal = document.getElementById('addModal');
  const openBtn = document.getElementById('openModalBtn');
  const saveBtn = document.getElementById('saveArtBtn');
  const fileInput = document.getElementById('imageFileInput');
  const urlInput = document.getElementById('imageUrlInput');
  const previewImg = document.getElementById('imagePreview');
  if (!modal || !openBtn || !saveBtn) return;
  openBtn.onclick = () => {
    resetModalFields();
    modal.classList.add('active');
  };
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      resetModalFields();
    }
  };
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (urlInput) urlInput.value = '';
      const reader = new FileReader();
      reader.onload = (ev) => {
        currentImageData = ev.target.result;
        if (previewImg) {
          previewImg.src = currentImageData;
          previewImg.style.display = 'block';
        }
      };
      reader.readAsDataURL(file);
    });
  }
  if (urlInput) {
    urlInput.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (url === '') {
        if (fileInput && fileInput.files.length === 0) currentImageData = null;
        if (previewImg) previewImg.style.display = 'none';
        return;
      }
      if (url.startsWith('http://') || url.startsWith('https://')) {
        currentImageData = url;
        if (previewImg) {
          previewImg.src = url;
          previewImg.style.display = 'block';
          previewImg.onerror = () => {
            previewImg.style.display = 'none';
            alert('⚠️ Не удалось загрузить превью, но можно сохранить картину');
          };
        }
        if (fileInput) fileInput.value = '';
      } else {
        if (currentImageData && !currentImageData.startsWith('data:')) currentImageData = null;
        if (previewImg) previewImg.style.display = 'none';
      }
    });
  }
  saveBtn.onclick = () => {
    const title = document.getElementById('artTitle')?.value.trim();
    const author = document.getElementById('artAuthor')?.value.trim();
    const category = document.getElementById('artCategory')?.value;
    if (!title || !author) {
      alert('❌ Укажите название и автора');
      return;
    }
    let finalImage = null;
    if (fileInput && fileInput.files.length > 0 && currentImageData && currentImageData.startsWith('data:')) {
      finalImage = currentImageData;
    } else if (urlInput && urlInput.value.trim() !== '' && (urlInput.value.trim().startsWith('http://') || urlInput.value.trim().startsWith('https://'))) {
      finalImage = urlInput.value.trim();
    }
    if (!finalImage) {
      alert('❌ Добавьте изображение (файл или URL)');
      return;
    }
    paintings.unshift({
      id: Date.now(),
      title: title,
      author: author,
      category: category,
      image: finalImage,
      dateAdded: Date.now()
    });
    saveToStorage();
    updateAuthorFilter();
    renderGallery();
    modal.classList.remove('active');
    resetModalFields();
  };
}

// ================= ПОИСК, ФИЛЬТРЫ, СОРТИРОВКА =================
function initFiltersAndSort() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const authorFilter = document.getElementById('authorFilter');
  const sortSelect = document.getElementById('sortSelect');
  if (!searchInput || !categoryFilter || !authorFilter || !sortSelect) return;
  const update = () => {
    currentSearchQuery = searchInput.value;
    currentFilterCategory = categoryFilter.value;
    currentAuthorFilter = authorFilter.value;
    currentSort = sortSelect.value;
    renderGallery();
  };
  searchInput.addEventListener('input', update);
  categoryFilter.addEventListener('change', update);
  authorFilter.addEventListener('change', update);
  sortSelect.addEventListener('change', update);
}

// ================= ТЁМНАЯ ТЕМА =================
function initTheme() {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (!themeBtn) return;
  const isDark = localStorage.getItem('darkTheme') === 'true';
  if (isDark) {
    document.body.classList.add('dark');
    themeBtn.textContent = '☀️ Светлая тема';
  } else {
    document.body.classList.remove('dark');
    themeBtn.textContent = '🌙 Тёмная тема';
  }
  themeBtn.onclick = () => {
    document.body.classList.toggle('dark');
    const nowDark = document.body.classList.contains('dark');
    localStorage.setItem('darkTheme', nowDark);
    themeBtn.textContent = nowDark ? '☀️ Светлая тема' : '🌙 Тёмная тема';
  };
}

// ================= ЗАКРЫТИЕ ЛАЙТБОКСА =================
function initLightboxClose() {
  const lightbox = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('closeLightboxBtn');
  if (!lightbox || !closeBtn) return;
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    const event = new Event('lightboxClosed');
    lightbox.dispatchEvent(event);
  };
  closeBtn.onclick = closeLightbox;
  lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
  };
}

// ================= ЗАПУСК =================
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  updateAuthorFilter();
  renderGallery();
  initModal();
  initFiltersAndSort();
  initTheme();
  initLightboxClose();
  initBackgroundSlideshow(10000);
});