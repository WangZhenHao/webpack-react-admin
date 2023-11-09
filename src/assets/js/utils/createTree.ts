interface typeTree {
    parentId?: string;
    id: string;
    child?: any[];
    sort?: any;
}
export function toMakeTree<T extends typeTree>(data: T[], pid: string): T[] {
    let arr = [];
    pid = pid || '0';
    for (let item of data) {
        if (item.parentId === pid) {
            let child = toMakeTree(data, item.id);
            if (child.length > 0) {
                item['child'] = child;
            }
            arr.push(item);
        }
    }

    return listSort(arr, 'sort', 'child');
}

export function listSort<T>(
    arr: T[],
    sortName: keyof T,
    childName: keyof T
): T[] {
    let tem = null,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        const item = arr[i][childName] as T[];
        if (item && item.length) {
            listSort(item, sortName, childName);
        }
        for (let j = 0; j < len - 1; j++) {
            if (arr[j][sortName] > arr[j + 1][sortName]) {
                tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
    return arr;
}
