const data = {
    "services": [
        {
            "id": 1,
            "head": null,
            "name": "Проф.осмотр",
            "node": 0,
            "price": 100.0,
            "sorthead": 20
        },
        {
            "id": 2,
            "head": null,
            "name": "Хирургия",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 3,
            "head": 2,
            "name": "Удаление зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 4,
            "head": 3,
            "name": "Удаление зуба",
            "node": 0,
            "price": 800.0,
            "sorthead": 10
        },
        {
            "id": 5,
            "head": 3,
            "name": "Удаление 8ого зуба",
            "node": 0,
            "price": 1000.0,
            "sorthead": 30
        },
        {
            "id": 6,
            "head": 3,
            "name": "Удаление осколка зуба",
            "node": 0,
            "price": 2000.0,
            "sorthead": 20
        },
        {
            "id": 7,
            "head": 2,
            "name": "Хирургические вмешательство",
            "node": 0,
            "price": 200.0,
            "sorthead": 10
        },
        {
            "id": 8,
            "head": 2,
            "name": "Имплантация зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 20
        },
        {
            "id": 9,
            "head": 8,
            "name": "Коронка",
            "node": 0,
            "price": 3000.0,
            "sorthead": 10
        },
        {
            "id": 10,
            "head": 8,
            "name": "Слепок челюсти",
            "node": 0,
            "price": 500.0,
            "sorthead": 20
        }
    ]
};

const tree = document.getElementById('tree');

// Функция для построения дерева
function buildTree(data, parentId, indent) {

    const parentItems = data.services.filter(item => item.head === parentId);
    if (parentItems.length === 0) return null;

    const htmlList = document.createElement('ul');
    htmlList.classList.add('list');

    parentItems.sort((a, b) => a.sorthead - b.sorthead);

    parentItems.forEach(item => {

        const treeListItem = document.createElement('li');
        
        if (item.price === 0) {
            treeListItem.textContent = `${item.name}`;
            treeListItem.classList.add('list__item');
        } else {
            treeListItem.textContent = `${item.name} (${item.price}₽)`;
            treeListItem.classList.add('list__item-price');
        }

        htmlList.append(treeListItem);

        if (item.node === 1) {

            const childTree = buildTree(data, item.id, indent + 1);

            if (childTree) {
                treeListItem.append(childTree);
            }
        }
    });

    return htmlList;
}

// Вывод дерева на странице
tree.append(buildTree(data, null, 0));