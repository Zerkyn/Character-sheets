create table characters (
    id serial primary key,
    name varchar,
    race varchar,
    level int,
    hp int,
    character_class varchar,
    strength int,
    dexterity int,
    constitution int,
    intelligence int,
    wisdom int,
    charisma int
);

create table spells (
    id serial primary key,
    spell_name varchar,
    description text,
    spell_level int,
    character_id int references characters(id)
);

create table inventory (
    id serial primary key,
    item_name varchar,
    description text,
    character_id int references characters(id)
);

