import Server from '@tridoc/frontend';
import { isNumber } from 'util';

const saveIcon = '<svg viewBox="0 0 24 24"><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"/></svg>';
const editIcon = '<svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
const addTagIcon = '<svg viewBox="0 0 24 24"><path d="M21.41,11.58L12.41,2.58C12.04,2.21 11.53,2 11,2H4A2,2 0 0,0 2,4V11C2,11.53 2.21,12.04 2.59,12.41L3,12.81C3.9,12.27 4.94,12 6,12A6,6 0 0,1 12,18C12,19.06 11.72,20.09 11.18,21L11.58,21.4C11.95,21.78 12.47,22 13,22C13.53,22 14.04,21.79 14.41,21.41L21.41,14.41C21.79,14.04 22,13.53 22,13C22,12.47 21.79,11.96 21.41,11.58M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M10,19H7V22H5V19H2V17H5V14H7V17H10V19Z"/></svg>';
const collapseIcon = '<svg viewBox="0 0 24 24"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>';

const tagsIcon = '<svg viewBox="0 0 24 24"><path d="M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z"/></svg>';
const removeTagIcon = '<svg viewBox="0 0 24 24"><path d="M21.41,11.58L12.41,2.58C12.04,2.21 11.53,2 11,2H4A2,2 0 0,0 2,4V11C2,11.53 2.21,12.04 2.59,12.41L3,12.81C3.9,12.27 4.94,12 6,12A6,6 0 0,1 12,18C12,19.06 11.72,20.09 11.18,21L11.58,21.4C11.95,21.78 12.47,22 13,22C13.53,22 14.04,21.79 14.41,21.41L21.41,14.41C21.79,14.04 22,13.53 22,13C22,12.47 21.79,11.96 21.41,11.58M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M10,19H2V17H10V19Z"/></svg>';

const dateIcon = '<svg viewBox="0 0 24 24"><path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"/></svg>'
const numberIcon = '<svg viewBox="0 0 24 24"> <path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z"/></svg>'

const urlInput = document.getElementById('server-url');
const usernameInput = document.getElementById('server-username');
const passwordInput = document.getElementById('server-password');
const saveButton = document.getElementById('server-save');
const settingsButton = document.getElementById('settings-button');
const settingsPopup = document.getElementById('settings-popup');
const closeSettingsButton = document.getElementById('settings-close');

const searchInput = document.getElementById('search-documents');
const searchReset = document.getElementById('reset-filters');
const searchLoader = document.createElement('div');
searchLoader.classList.add('loader');

const tagSidebar = document.getElementById('tag-sidebar');
const tagList = document.getElementById('tag-list');
const tagCollapseButton = document.getElementById('collapse-tags');

const header = document.getElementsByTagName('header')[0];
const main = document.getElementById('main');

const documentContainer = document.getElementById('document');
const documentText = document.getElementById('pdf-text');
const documentLoader = document.createElement('div');
documentLoader.classList.add('loader');

const currentTitle = document.getElementById('current-title');
const editTitleButton = document.getElementById('edit-title');
const cancelEditTitleButton = document.getElementById('cancel-edit-title');
const currentTagsElement = document.getElementById('current-tags');
const currentTagsInput = document.getElementById('current-tags-input');

const storage = localStorage;

if (storage.getItem('server')) {
    urlInput.value = storage.getItem('server');
} else {
    urlInput.value = 'http://localhost:8000';
}

if (storage.getItem('username')) {
    usernameInput.value = storage.getItem('username');
}

if (storage.getItem('password')) {
    passwordInput.value = storage.getItem('password');
}

if (storage.getItem("limit")) {
    document.getElementById("result-limit").value = storage.getItem("limit");
} else {
    document.getElementById("result-limit").value = "-1";
}

let server = new Server(urlInput.value, usernameInput.value, passwordInput.value);

const generateError = e => {
    const errorElem = document.createElement('div');
    errorElem.classList = 'error';
    errorElem.textContent = e.status ? `Error ${e.status}: ${e.message ? e.message : e}` : e;
    return errorElem;
}

const render = (id) => {
    const url = server.url + '/doc/' + id;
    documentContainer.innerHTML = `<object data="${url}" type="application/pdf" width="100%" height="100%">
    <a href="${url}">Download PDF</a>
    </object>`;
}

const addTag = (whereto, label, type = 'simple', value = '') => {
    const newTag = document.createElement("div");
    newTag.classList = 'tag';
    newTag.setAttribute('data-tag-type', type);
    newTag.setAttribute('data-tag-label', label);
    const valueIndicator = value ? '<span class="tag-value">' + value + '</span>' : '';
    newTag.innerHTML = `<span class="tag-text"></span>${valueIndicator}<!--<button class="tag-icon tag-remove">${removeTagIcon}</button>-->`;
    newTag.getElementsByClassName('tag-text')[0].textContent = label;
    whereto.appendChild(newTag)
}

const getTagList = () => {
    server.getTags().then(array => {
        if (array.error) tagList.textContent = 'Error: ' + array.error;
        else if (array.length > 0) {
            tagList.innerHTML = '';
            array.sort((a, b) => {
                return a.label.localeCompare(b.label);
            })
            array.forEach(a => {
                let type = 'simple';
                let value;
                if (a.parameter) {
                    value = a.parameter.value;
                    if (a.parameter.type == 'http://www.w3.org/2001/XMLSchema#decimal') {
                        type = 'decimal';
                    } else if (a.parameter.type == 'http://www.w3.org/2001/XMLSchema#date') {
                        type = 'date';
                    }
                }
                const newTag = document.createElement("li");
                newTag.classList = 'sidebar-tag tag';
                newTag.setAttribute('data-tag-type', type);
                newTag.setAttribute('data-tag-label', a.label);
                const icon = type === 'date' ? dateIcon : type === 'decimal' ? numberIcon : '';
                const valueIndicator = value ? '<span class="tag-value">' + value + '</span>' : '';
                newTag.innerHTML = `<span class="tag-text"></span>${valueIndicator}<div class="tag-icon">${icon}</div>`;
                newTag.getElementsByClassName('tag-text')[0].textContent = a.label;
                newTag.addEventListener('click', e => {
                    if (searchInput.value.indexOf(a.label) === -1) {
                        searchInput.value = `#${a.label} ${searchInput.value}`;
                        searchDocuments();
                    }
                })
                tagList.appendChild(newTag)
            });
        } else tagList.innerHTML = '<i>No Tags</i>';
    }).catch(e => {
        tagList.innerText = 'Error: ' + e;
    });
}

const getTags = () => {
    getTagList();
    document.querySelectorAll('.s__th').forEach((dest) => {
        if (!dest.closest('.s__id')) return;
        const id = dest.closest('.s__id').getAttribute('data-document-id');
        if (!dest.getElementsByClassName("loader")[0]) {
            const loader = document.createElement("div")
            loader.classList = 'loader loader-small inline'
            dest.appendChild(loader);
        }
        server.getTags(id).then(array => {
            let list = '';
            if (array.error) {
                dest.innerText = 'Error: ' + array.error;
            } else if (array.length > 0) {
                dest.innerHTML = '';
                array.sort((a, b) => {
                    return a.label.localeCompare(b.label);
                })
                array.forEach(a => {
                    let type = 'simple';
                    let icon = 'mi-tag';
                    let value;
                    if (a.parameter) {
                        value = a.parameter.value;
                        if (a.parameter.type == 'http://www.w3.org/2001/XMLSchema#decimal') {
                            type = 'decimal';
                            icon = 'mi-num';
                        } else if (a.parameter.type == 'http://www.w3.org/2001/XMLSchema#date') {
                            type = 'date';
                            icon = 'mi-cal';
                        }
                    }
                    addTag(dest, a.label, type, value);
                });
            } else {
                list = '<i>No Tags</i>';
                dest.innerHTML = list;
            }
        }).catch(e => {
            dest.innerText = 'Error: ' + e;
        });
    });
}

const uploadTag = (id, label, type = '', value = '') => {
    server.addTag(id, label, type, value).then(r => {
        if (r.error === 'Cannot find tag') server.createTag(label, type).then(r => server.addTag(id, label, type, value).then(r => getTags()));
        else console.log(r);
    });
}

const resetEditButton = () => {
    currentTitle.contentEditable = false;
    currentTitle.innerHTML = main.getAttribute('data-document-title') || `<i>Untitled Document <code>${main.getAttribute('data-document-id')}<code></i>`;
    cancelEditTitleButton.classList.add('hidden');
    editTitleButton.innerHTML = editIcon;
    editTitleButton.removeEventListener('click', saveTitle);
    editTitleButton.addEventListener('click', editTitle);
}

const saveTitle = () => {
    const id = main.getAttribute('data-document-id');
    const title = currentTitle.innerHTML;
    main.setAttribute('data-document-title', title);
    resetEditButton();
    console.log('Saving')
    server.setDocumentTitle(id, title).then(r => searchDocuments());
}
const editTitle = () => {
    currentTitle.contentEditable = true;
    currentTitle.innerHTML = main.getAttribute('data-document-title') || '';
    cancelEditTitleButton.classList.remove('hidden');
    editTitleButton.innerHTML = saveIcon;
    editTitleButton.removeEventListener('click', editTitle);
    editTitleButton.addEventListener('click', saveTitle);
    currentTitle.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault()
            saveTitle()
        }
    });
}

const fillout = (element) => {
    resetEditButton();
    const titleElement = element.getElementsByClassName('s__t')[0];
    let documentTitle = element.getAttribute('data-document-title');
    let id = element.getAttribute('data-document-id');
    currentTitle.innerHTML = documentTitle || `<i>Untitled Document <code>${id}<code></i>`;
    main.setAttribute('data-document-id', id);
    main.setAttribute('data-document-title', element.getAttribute('data-document-title'));
    getTags();
    render(id);
}

const regx = (re, string, join = ', ') => {
    const match = re.exec(string);
    return match ? join + match[1] + regx(re, string, join) : '';
}

const searchDocuments = (page) => {
    let dest = document.getElementById('document-list');
    dest.innerHTML = '';
    dest.appendChild(searchLoader);
    const value = ' ' + searchInput.value;
    const tagsregex = /[^!#\\\b]\B#([^\s"',;:]+?(?=\s|$))/g;
    const nottagsregex = /[^#\\]\B!#([^\s"',;:]+?(?=\s|$))/g;
    const query = value ? encodeURIComponent(value.replace(tagsregex, '').replace(nottagsregex, '').replace(/^ /, '').replace(/\\/, '')) : '';
    const tags = regx(tagsregex, value, '&tag=');
    let notTags = regx(nottagsregex, value, '&nottag=');
    let tagsQuery = tags ? tags : '';
    let notTagsQuery = notTags ? notTags : '';
    if (isNaN(page)) {
        page = 0
    }
    let limit = ((storage.getItem('limit') > 0) ? storage.getItem('limit') : '');
    let offset = page * limit;
    let to = 0;

    server.getDocuments(query, tagsQuery, notTagsQuery, limit, offset).then(array => {
        let list = '';
        if (array.error) {
            dest.innerHTML = array.error;
        } else if (array.length > 0) {
            array.forEach(a => {
                let label = a.title ? a.title : a.identifier;
                const documentListEntry = document.createElement('button');
                documentListEntry.classList = 'list-item list-item-flexible fillout-button s__id';
                documentListEntry.setAttribute('data-document-id', a.identifier);
                documentListEntry.setAttribute('data-document-title', a.title)
                const title = document.createElement('h2');
                title.classList = 's__t';
                title.innerHTML = label;
                documentListEntry.appendChild(title);
                const tagsHere = document.createElement('div');
                tagsHere.classList = 's__th';
                documentListEntry.appendChild(tagsHere);
                documentListEntry.addEventListener('click', filloutFromEvent);
                //renderPreview(documentListEntry); currently crashes browser
                searchLoader.parentNode.removeChild(searchLoader);
                dest.appendChild(documentListEntry);
                dest.appendChild(searchLoader);
            });
            searchLoader.parentNode.removeChild(searchLoader);
            fillout(dest.firstChild);
        } else {
            let label1 = query ? "Nothing Found" : "Documents will appear here";
            let label2 = query ? "You can try another query" : "Upload something";
            list = "<div class='list-item list-item-flexible'>" +
                "<h2>" +
                label1 +
                "</h2>" +
                label2 +
                "</div>";
            dest.innerHTML = list;
        }
        document.querySelectorAll('.page-switch').forEach(element => element.addEventListener('click', () => {
            searchDocuments(element.getAttribute('data-pagination-target'));
        }));
        getTags();
    }).catch(e => {
        console.log(e);
    });
}

const resetFilter = () => {
    searchInput.value = '';
    searchDocuments();
}

const saveServer = () => {
    settingsPopup.classList.add('hidden');
    let serverAddress = urlInput.value;
    server = new Server(serverAddress, usernameInput.value, passwordInput.value);
    try {
        storage.setItem('server', serverAddress);
        storage.setItem('username', usernameInput.value);
        storage.setItem('password', passwordInput.value);
    } catch (error) {
        console.log(error)
    }
    searchDocuments();
}

/* - EVENT LISTENERS - */

function filloutFromEvent() {
    fillout(this);
}

saveButton.addEventListener('click', saveServer);
searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') searchDocuments()
});
searchReset.addEventListener('click', resetFilter);
tagCollapseButton.addEventListener('click', e => {
    tagSidebar.classList.toggle('sidebar__collapsed');
});
settingsButton.addEventListener('click', () => settingsPopup.classList.remove('hidden'));
closeSettingsButton.addEventListener('click', () => settingsPopup.classList.add('hidden'));
editTitleButton.addEventListener('click', editTitle);
cancelEditTitleButton.addEventListener('click', resetEditButton);
currentTagsInput.addEventListener('keydown', e => {
    let label = currentTagsInput.value;
    const keys = ['Enter', ' ', ';', ',', '\'', '"'];
    if (keys.includes(e.key)) {
        if (e.preventDefault) {
            e.preventDefault();
            if (label == '') return false;
            const id = main.getAttribute('data-document-id');
            const io = label.indexOf(':');
            if (io > 0) {
                const value = label.substring(io + 1);
                //if (value.indexOf(':')) return false;
                if (+value) {
                    label = label.substring(0, io);
                    addTag(currentTagsElement, label, 'decimal', +value);
                    uploadTag(id, label, 'decimal', +value);
                    currentTagsInput.value = '';
                }
            } else {
                addTag(currentTagsElement, label);
                uploadTag(id, label);
                currentTagsInput.value = '';
            }
        }
        return false;
    }
    if (label == '' && e.key === 'Backspace') currentTagsElement.removeChild(currentTagsElement.lastChild);
});

/* - ON LOAD - */

getTagList();
searchDocuments();