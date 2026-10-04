const fs = require('fs');
let index = fs.readFileSync('/Users/t0rq/Downloads/Programming/Gate 2027/GATE_Vault/index.html', 'utf8');
let appjs = fs.readFileSync('/Users/t0rq/Downloads/Programming/Gate 2027/GATE_Vault/app.js', 'utf8');

// -----------------------------------------------------
// 1. FIX APP.JS MOBILE MENU EVENT LISTENER
// -----------------------------------------------------
appjs = appjs.replace("document.getElementById('mobile-menu-btn').addEventListener('click', toggleSidebar);", "document.getElementById('mobile-menu-btn').addEventListener('click', () => toggleSidebar());");
appjs = appjs.replace("document.getElementById('close-sidebar-btn').addEventListener('click', toggleSidebar);", "document.getElementById('close-sidebar-btn').addEventListener('click', () => toggleSidebar(false));");

// -----------------------------------------------------
// 2. ADD TAILWIND DARK MODE CONFIG
// -----------------------------------------------------
if (!index.includes("tailwind.config")) {
    index = index.replace('<script src="https://cdn.tailwindcss.com"></script>', 
        '<script src="https://cdn.tailwindcss.com"></script>\\n    <script>tailwind.config = { darkMode: "class" }</script>');
}

// -----------------------------------------------------
// 3. INDEX.HTML DARK MODE CLASSES
// -----------------------------------------------------
index = index.replace('<body class="text-gray-900 bg-gray-50', '<body class="text-gray-900 bg-gray-50 dark:bg-gray-950 dark:text-gray-100');
index = index.replace('header class="bg-white', 'header class="bg-white dark:bg-gray-900 dark:border-gray-800');
index = index.replace('w-72 bg-white border-r border-gray-200', 'w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800');
index = index.replace('bg-gray-50 px-4 sm:p-6 lg:p-8', 'bg-gray-50 dark:bg-gray-950 px-4 sm:p-6 lg:p-8');
index = index.replace('class="bg-white rounded-xl border border-gray-200', 'class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800');
index = index.replace('bg-gray-50 p-3 rounded-lg border border-gray-100', 'bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700');
index = index.replace('class="p-4 border-b border-gray-100 flex justify-between items-center lg:hidden bg-gray-50"', 'class="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center lg:hidden bg-gray-50 dark:bg-gray-900"');
index = index.replace(/bg-gray-50/g, 'bg-gray-50 dark:bg-gray-950');

// Header Text & Tabs Dark Mode
index = index.replace('text-gray-900 truncate', 'text-gray-900 dark:text-white truncate');
index = index.replace('border-b border-gray-100 flex', 'border-b border-gray-100 dark:border-gray-800 flex');
index = index.replace('border-b border-gray-200', 'border-b border-gray-200 dark:border-gray-800');

const topTabsRegex = /class="top-tab text-gray-500 border-transparent hover:text-gray-700/g;
index = index.replace(topTabsRegex, 'class="top-tab text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300');

// Tools Drawer Dark Mode
index = index.replace('id="tools-drawer" class="fixed inset-y-0 right-0 w-full sm:w-[520px] bg-white', 'id="tools-drawer" class="fixed inset-y-0 right-0 w-full sm:w-[520px] bg-white dark:bg-gray-900');
index = index.replace('border-gray-200 shadow-sm p-5 text-center', 'border-gray-200 dark:border-gray-800 shadow-sm p-5 text-center dark:bg-gray-800');
index = index.replace('border-gray-200 shadow-sm p-5 text-center mt-2', 'border-gray-200 dark:border-gray-800 shadow-sm p-5 text-center mt-2 dark:bg-gray-800');
index = index.replace('bg-white rounded-xl border border-gray-200 shadow-sm flex-1 flex flex-col', 'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex-1 flex flex-col');
index = index.replace('border-b border-gray-100 bg-gray-50 text-xs font-bold text-gray-500', 'border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs font-bold text-gray-500 dark:text-gray-400');
index = index.replace('text-gray-900 mb-4', 'text-gray-900 dark:text-white mb-4'); // stopwatch text
index = index.replace('text-gray-900 mb-4', 'text-gray-900 dark:text-white mb-4'); // timer text

// Timer Inputs Dark Mode
index = index.replace(/border-gray-300 rounded/g, 'border-gray-300 dark:border-gray-600 rounded dark:bg-gray-900 dark:text-white');


// -----------------------------------------------------
// 4. ADD THEME SWITCH BUTTON TO HEADER
// -----------------------------------------------------
const themeBtn = `
            <button onclick="toggleTheme()" class="shrink-0 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 transition-colors ml-auto mr-2" aria-label="Toggle Dark Mode">
                <svg id="theme-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <!-- Default to Sun placeholder -->
                </svg>
            </button>
            <button onclick="toggleTools()"`;

if(!index.includes("toggleTheme()")) {
    index = index.replace('<button onclick="toggleTools()"', themeBtn);
}


// -----------------------------------------------------
// 5. APP.JS DARK MODE CLASSES FOR INJECTED HTML
// -----------------------------------------------------
// Sidebar Subject Headers
appjs = appjs.replace(/text-gray-900 text-xs uppercase/g, 'text-gray-900 dark:text-gray-300 text-xs uppercase');
// Sidebar Buttons
appjs = appjs.replace(/text-gray-600 rounded-md hover:bg-blue-50/g, 'text-gray-600 dark:text-gray-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/50');

// Questions Generator
appjs = appjs.replace(/text-gray-900/g, 'text-gray-900 dark:text-white');
appjs = appjs.replace(/bg-white rounded-xl/g, 'bg-white dark:bg-gray-800 rounded-xl');
appjs = appjs.replace(/border-gray-200/g, 'border-gray-200 dark:border-gray-700');
appjs = appjs.replace(/text-gray-500/g, 'text-gray-500 dark:text-gray-400');
appjs = appjs.replace(/text-gray-600/g, 'text-gray-600 dark:text-gray-300');
appjs = appjs.replace(/text-gray-800/g, 'text-gray-800 dark:text-gray-200');
appjs = appjs.replace(/bg-gray-50/g, 'bg-gray-50 dark:bg-gray-900');
appjs = appjs.replace(/border-gray-100/g, 'border-gray-100 dark:border-gray-700');
appjs = appjs.replace(/bg-blue-50/g, 'bg-blue-50 dark:bg-blue-900/20');
appjs = appjs.replace(/bg-green-50\/30/g, 'bg-green-50/30 dark:bg-green-900/20');
appjs = appjs.replace(/text-blue-900/g, 'text-blue-900 dark:text-blue-200');
appjs = appjs.replace(/bg-gray-100/g, 'bg-gray-100 dark:bg-gray-700');
appjs = appjs.replace(/text-green-700/g, 'text-green-700 dark:text-green-400');
appjs = appjs.replace(/border-blue-500/g, 'border-blue-500 dark:border-blue-400');

// Routine Generator specific tweaks
appjs = appjs.replace(/bg-orange-100/g, 'bg-orange-100 dark:bg-orange-900/30');
appjs = appjs.replace(/text-orange-700/g, 'text-orange-700 dark:text-orange-300');
appjs = appjs.replace(/border-orange-200/g, 'border-orange-200 dark:border-orange-800');

appjs = appjs.replace(/bg-blue-100/g, 'bg-blue-100 dark:bg-blue-900/30');
appjs = appjs.replace(/text-blue-700/g, 'text-blue-700 dark:text-blue-300');
appjs = appjs.replace(/border-blue-200/g, 'border-blue-200 dark:border-blue-800');

appjs = appjs.replace(/bg-indigo-100/g, 'bg-indigo-100 dark:bg-indigo-900/30');
appjs = appjs.replace(/text-indigo-700/g, 'text-indigo-700 dark:text-indigo-300');
appjs = appjs.replace(/border-indigo-200/g, 'border-indigo-200 dark:border-indigo-800');


// -----------------------------------------------------
// 6. ADD THEME LOGIC TO APP.JS
// -----------------------------------------------------
const themeScript = `
// ==========================================
// DARK MODE LOGIC
// ==========================================
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    if (isDark) {
        // Sun Icon
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12.34h-1m15.36 4.95l-.7-.7M6.34 6.34l-.7-.7m12.02 0l-.7.7M6.34 17.66l-.7.7M12 8a4 4 0 100 8 4 4 0 000-8z"/>';
    } else {
        // Moon Icon
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
    }
}

// Initial Theme execution (runs before DOM loads fully, but we call updateThemeIcon on load)
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}
document.addEventListener("DOMContentLoaded", updateThemeIcon);
`;

if(!appjs.includes("toggleTheme()")) {
    appjs = appjs + '\\n' + themeScript;
}


fs.writeFileSync('/Users/t0rq/Downloads/Programming/Gate 2027/GATE_Vault/index.html', index);
fs.writeFileSync('/Users/t0rq/Downloads/Programming/Gate 2027/GATE_Vault/app.js', appjs);
