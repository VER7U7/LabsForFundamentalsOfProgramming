
const phone_number = {
    name: undefined,
    phone: undefined,
    set(name, phone) {
        this.name = name;
        this.phone = phone;
        return this;
    },
    create(name, phone) {
        const new_phone = Object.create(this);
        new_phone.set(name, phone);
        return new_phone;
    }
};

const all_phones = [
    phone_number.create("Genadiy", "+49 020 14  88 883"),
    phone_number.create("Bodya", "+31 415 96 61 222"),
    phone_number.create("Katya", "+38 050 02 77 903"),
];

export function findPhoneByName(name) {
    for (const elem of all_phones) {
        if (elem.name == name)
            return elem.phone;
    }
    return undefined;
}

const all_phones_hash = new Map();
all_phones_hash.set("Genadiy", "+49 020 14  88 883");
all_phones_hash.set("Bodya", "+31 415 96 61 222");
all_phones_hash.set("Katya", "+38 050 02 77 903");

export function findPhoneByNameHashed(name) {
    return all_phones_hash.get(name);
}
