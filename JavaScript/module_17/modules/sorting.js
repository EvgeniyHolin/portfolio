// функция сортировки по возрастанию
export function sorting(array, field) {
    if (field == 'weight') {
      array.sort((a, b) => a[field] - b[field])
    } else {
      array.sort((a, b) => a[field].localeCompare(b[field]))
    }
    
    return array;
  }
