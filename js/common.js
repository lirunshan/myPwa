function clearAll() {
    if (!confirm('确定清空所有记录？')) return;
    localStorage.removeItem(STORAGE_KEY);
    document.querySelectorAll('input[type=checkbox]')
      .forEach(cb => cb.checked = false);
    data = {};
}
