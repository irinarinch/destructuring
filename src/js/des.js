export default function getArray(obj, requiredId) {
  for (let i = 0; i < obj.special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = obj.special[i];
    if (requiredId === id) {
      return [id, name, icon, description];
    }
  }
  return true;
}
