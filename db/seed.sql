use employees;

INSERT INTO department
    (name)
VALUES
    ('Operations'),
    ('Marketing'),
    ('Accounts & Finance'),
    ('Human Resources');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Manufacturing', 100000, 1),
    ('Plant Manager', 80000, 1),
    ('Sales Manager', 150000, 2),
    ('Sales Executive', 120000, 2),
    ('Customer Relations', 160000, 2),
    ('Accountant', 125000, 3),
    ('Tax Advisor', 250000, 3),
    ('Employee Relations', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Melissa', 'Jacobs', 1, NULL),
    ('Sherry', 'Birkin', 2, 1),
    ('Amanda', 'Cruz', 3, NULL),
    ('Nikki', 'Kohlbeck', 4, 3),
    ('Kevin', 'Berg', 5, 3),
    ('Geoff', 'Kibbey', 6, NULL),
    ('Haley', 'Hotz', 7, 6),
    ('Jonbria', 'Davis', 8, NULL);
