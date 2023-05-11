INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Salesperson', 80000.00, 1),
    ('Lead Engineer', 150000.00, 2),
    ('Software Engineer', 120000.00, 2),
    ('Finance Specialist', 125000.00, 3),
    ('Legal Team Lead', 250000.00, 4),
    ('Lawyer', 190000.00, 4),
    ('Marketing Lead', 190000.00, 5),
    ('Marketing Specialist', 150000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, 1),
    ('Kevin', 'Tupik', 4, 1),
    ('Malia', 'Brown', 5, 2),
    ('Sarah', 'Lourd', 6, 2),
    ('Tom', 'Allen', 7, 2),
    ('Sam', 'Carter', 8, 2);