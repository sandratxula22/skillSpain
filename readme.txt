laravel new skillsSpain2025
composer require illuminate/support
php artisan config:publish cors

// Laravel Migration for Provincias Table
php artisan make:migration create_provincias_table --create=provincias

Schema::create('provincias', function (Blueprint $table) {
    $table->id();
    $table->string('nombre', 100);
    $table->timestamps();
});

// Laravel Migration for Pueblos Table
php artisan make:migration create_pueblos_table --create=pueblos

Schema::create('pueblos', function (Blueprint $table) {
    $table->id();
    $table->string('nombre', 100);
    $table->unsignedBigInteger('provincia_id');
    $table->foreign('provincia_id')->references('id')->on('provincias');
    $table->integer('num_vecinos_censados');
    $table->integer('num_personas_fiestas');
    $table->integer('num_personas_verano');
    $table->timestamps();
});

// Laravel Migration for Usuarios Table
php artisan make:migration create_usuarios_table --create=usuarios

Schema::create('usuarios', function (Blueprint $table) {
    $table->id();
    $table->string('nombre', 100);
    $table->string('apellidos', 200);
    $table->enum('rol', ['Administrador', 'Alcalde', 'Ciudadano']);
    $table->unsignedBigInteger('pueblo_id')->nullable();
    $table->foreign('pueblo_id')->references('id')->on('pueblos');
    $table->timestamps();
});

// Laravel Migration for Eventos Table
php artisan make:migration create_eventos_table --create=eventos

Schema::create('eventos', function (Blueprint $table) {
    $table->id();
    $table->string('nombre', 100);
    $table->date('fecha');
    $table->time('hora');
    $table->decimal('precio', 10, 2);
    $table->unsignedBigInteger('pueblo_id');
    $table->foreign('pueblo_id')->references('id')->on('pueblos');
    $table->timestamps();
});

// Laravel Migration for Bailes Table
php artisan make:migration create_bailes_table --create=bailes

Schema::create('bailes', function (Blueprint $table) {
    $table->id();
    $table->enum('tipo', ['Individual', 'Pareja', 'Grupo']);
    $table->enum('configuracion_geometrica', ['Fila', 'Circunferencia', 'Rombo', 'Cuadrado']);
    $table->unsignedBigInteger('pueblo_id');
    $table->foreign('pueblo_id')->references('id')->on('pueblos');
    $table->timestamps();
});

// Laravel Migration for Inscripciones Table
php artisan make:migration create_inscripciones_table --create=inscripciones

Schema::create('inscripciones', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('usuario_id');
    $table->enum('tipo_inscripcion', ['Evento', 'Baile']);
    $table->unsignedBigInteger('referencia_id');
    $table->date('fecha_alta');
    $table->date('fecha_baja')->nullable();
    $table->foreign('usuario_id')->references('id')->on('usuarios');
    $table->timestamps();
});

// Laravel Migration for Noticias Table
php artisan make:migration create_noticias_table --create=noticias

Schema::create('noticias', function (Blueprint $table) {
    $table->id();
    $table->enum('tipo', ['Urgente', 'Aviso', 'Información', 'Evento']);
    $table->string('titulo', 200);
    $table->text('contenido');
    $table->date('fecha_creacion');
    $table->unsignedBigInteger('pueblo_id');
    $table->foreign('pueblo_id')->references('id')->on('pueblos');
    $table->timestamps();
});

// Insert statements for Provincias
INSERT INTO provincias (nombre, created_at, updated_at) VALUES 
('Provincia 1', NOW(), NOW()),
('Provincia 2', NOW(), NOW()),
('Provincia 3', NOW(), NOW()),
('Provincia 4', NOW(), NOW()),
('Provincia 5', NOW(), NOW());

// Insert statements for Pueblos
INSERT INTO pueblos (nombre, provincia_id, num_vecinos_censados, num_personas_fiestas, num_personas_verano, created_at, updated_at) VALUES 
('Pueblo 1', 1, 1000, 200, 500, NOW(), NOW()),
('Pueblo 2', 2, 1500, 300, 700, NOW(), NOW()),
('Pueblo 3', 3, 800, 100, 400, NOW(), NOW()),
('Pueblo 4', 4, 1200, 250, 600, NOW(), NOW()),
('Pueblo 5', 5, 500, 80, 300, NOW(), NOW());

// Insert statements for Usuarios
INSERT INTO usuarios (nombre, apellidos, rol, pueblo_id, created_at, updated_at) VALUES 
('Admin', 'Admin Last', 'Administrador', NULL, NOW(), NOW()),
('Alcalde 1', 'Alcalde Last', 'Alcalde', 1, NOW(), NOW()),
('Ciudadano 1', 'Ciudadano Last', 'Ciudadano', 1, NOW(), NOW()),
('Ciudadano 2', 'Ciudadano Last', 'Ciudadano', 2, NOW(), NOW()),
('Ciudadano 3', 'Ciudadano Last', 'Ciudadano', 3, NOW(), NOW());

// Insert statements for Eventos
INSERT INTO eventos (nombre, fecha, hora, precio, pueblo_id, created_at, updated_at) VALUES 
('Evento 1', '2025-02-20', '10:00:00', 10.50, 1, NOW(), NOW()),
('Evento 2', '2025-03-15', '12:00:00', 20.00, 2, NOW(), NOW()),
('Evento 3', '2025-04-10', '15:00:00', 15.75, 3, NOW(), NOW()),
('Evento 4', '2025-05-05', '09:30:00', 30.00, 4, NOW(), NOW()),
('Evento 5', '2025-06-01', '14:00:00', 25.00, 5, NOW(), NOW());

// Insert statements for Bailes
INSERT INTO bailes (tipo, configuracion_geometrica, pueblo_id, created_at, updated_at) VALUES 
('Individual', 'Fila', 1, NOW(), NOW()),
('Pareja', 'Circunferencia', 2, NOW(), NOW()),
('Grupo', 'Rombo', 3, NOW(), NOW()),
('Grupo', 'Cuadrado', 4, NOW(), NOW()),
('Individual', 'Fila', 5, NOW(), NOW());

// Insert statements for Inscripciones
INSERT INTO inscripciones (usuario_id, tipo_inscripcion, referencia_id, fecha_alta, fecha_baja, created_at, updated_at) VALUES 
(3, 'Evento', 1, '2025-02-10', NULL, NOW(), NOW()),
(4, 'Evento', 2, '2025-02-11', NULL, NOW(), NOW()),
(5, 'Baile', 3, '2025-02-12', NULL, NOW(), NOW()),
(3, 'Baile', 4, '2025-02-13', '2025-02-14', NOW(), NOW()),
(4, 'Evento', 5, '2025-02-15', NULL, NOW(), NOW());

// Insert statements for Noticias
INSERT INTO noticias (tipo, titulo, contenido, fecha_creacion, pueblo_id, created_at, updated_at) VALUES 
('Urgente', 'Noticia Urgente 1', 'Contenido urgente 1', '2025-02-10', 1, NOW(), NOW()),
('Aviso', 'Noticia Aviso 1', 'Contenido aviso 1', '2025-02-11', 2, NOW(), NOW()),
('Información', 'Noticia Información 1', 'Contenido información 1', '2025-02-12', 3, NOW(), NOW()),
('Evento', 'Noticia Evento 1', 'Contenido evento 1', '2025-02-13', 4, NOW(), NOW()),
('Aviso', 'Noticia Aviso 2', 'Contenido aviso 2', '2025-02-14', 5, NOW(), NOW());




---------------------------------------
INSERT INTO provincias (nombre, created_at, updated_at) VALUES 
('Madrid', NOW(), NOW()),
('Barcelona', NOW(), NOW()),
('Sevilla', NOW(), NOW()),
('Valencia', NOW(), NOW()),
('Bilbao', NOW(), NOW());

INSERT INTO pueblos (nombre, provincia_id, num_vecinos_censados, num_personas_fiestas, num_personas_verano, alcalde_id, created_at, updated_at) VALUES 
('Alcalá de Henares', 1, 200000, 50000, 70000, NULL, NOW(), NOW()),
('Mataró', 2, 120000, 30000, 40000, NULL, NOW(), NOW()),
('Utrera', 3, 80000, 20000, 30000, NULL, NOW(), NOW()),
('Gandía', 4, 75000, 15000, 25000, NULL, NOW(), NOW()),
('Getxo', 5, 60000, 10000, 20000, NULL, NOW(), NOW());
INSERT INTO usuarios (nombre, apellidos, rol, pueblo_id, created_at, updated_at) VALUES 
-- Alcaldes
('Juan', 'Pérez', 'Alcalde', 1, NOW(), NOW()),
('Maria', 'Gómez', 'Alcalde', 2, NOW(), NOW()),
('Carlos', 'Fernández', 'Alcalde', 3, NOW(), NOW()),
('Laura', 'Ruiz', 'Alcalde', 4, NOW(), NOW()),
('Pedro', 'López', 'Alcalde', 5, NOW(), NOW()),

-- Ciudadanos
('Ana', 'Martínez', 'Ciudadano', 1, NOW(), NOW()),
('David', 'Sánchez', 'Ciudadano', 2, NOW(), NOW()),
('Sofía', 'Díaz', 'Ciudadano', 3, NOW(), NOW()),
('Javier', 'Moreno', 'Ciudadano', 4, NOW(), NOW()),
('Elena', 'Torres', 'Ciudadano', 5, NOW(), NOW()),

-- Administradores (Sin pueblo asignado)
('Admin1', 'Super', 'Administrador', NULL, NOW(), NOW()),
('Admin2', 'Gestor', 'Administrador', NULL, NOW(), NOW());

UPDATE pueblos SET alcalde_id = (SELECT id FROM usuarios WHERE pueblo_id = 1 AND rol = 'Alcalde') WHERE id = 1;
UPDATE pueblos SET alcalde_id = (SELECT id FROM usuarios WHERE pueblo_id = 2 AND rol = 'Alcalde') WHERE id = 2;
UPDATE pueblos SET alcalde_id = (SELECT id FROM usuarios WHERE pueblo_id = 3 AND rol = 'Alcalde') WHERE id = 3;
UPDATE pueblos SET alcalde_id = (SELECT id FROM usuarios WHERE pueblo_id = 4 AND rol = 'Alcalde') WHERE id = 4;
UPDATE pueblos SET alcalde_id = (SELECT id FROM usuarios WHERE pueblo_id = 5 AND rol = 'Alcalde') WHERE id = 5;

-- Insertar en la tabla 'bailes'
INSERT INTO bailes (tipo, configuracion_geometrica, pueblo_id, created_at, updated_at) VALUES
('Individual', 'Fila', 1, NOW(), NOW()),
('Pareja', 'Circunferencia', 2, NOW(), NOW()),
('Grupo', 'Rombo', 3, NOW(), NOW()),
('Individual', 'Cuadrado', 4, NOW(), NOW()),
('Pareja', 'Fila', 5, NOW(), NOW());

-- Insertar en la tabla 'eventos'
INSERT INTO eventos (nombre, fecha, hora, precio, pueblo_id, created_at, updated_at) VALUES
('Festival de Música', '2024-06-15', '18:00:00', 25.50, 1, NOW(), NOW()),
('Feria de Artesanía', '2024-07-20', '10:00:00', 10.00, 2, NOW(), NOW()),
('Concierto de Rock', '2024-08-05', '20:00:00', 30.00, 3, NOW(), NOW()),
('Exposición de Arte', '2024-09-10', '09:00:00', 15.00, 4, NOW(), NOW()),
('Teatro al Aire Libre', '2024-10-25', '19:00:00', 20.00, 5, NOW(), NOW());

-- Insertar en la tabla 'inscripciones'
INSERT INTO inscripciones (usuario_id, tipo_inscripcion, eventos_id, bailes_id, fecha_alta, fecha_baja, created_at, updated_at) VALUES
(1, 'Evento', 1, NULL, '2024-01-01', NULL, NOW(), NOW()),
(2, 'Baile', NULL, 1, '2024-01-02', NULL, NOW(), NOW()),
(3, 'Evento', 2, NULL, '2024-01-03', NULL, NOW(), NOW()),
(4, 'Baile', NULL, 2, '2024-01-04', NULL, NOW(), NOW()),
(5, 'Evento', 3, NULL, '2024-01-05', NULL, NOW(), NOW());

-- Insertar en la tabla 'noticias'
INSERT INTO noticias (tipo, titulo, contenido, fecha_creacion, pueblo_id, created_at, updated_at) VALUES
('Urgente', 'Apertura del Festival de Música', 'El festival de música abrirá sus puertas el 15 de junio.', '2024-06-15', 1, NOW(), NOW()),
('Aviso', 'Feria de Artesanía en Medina', 'La feria de artesanía se celebrará el 20 de julio en Medina del Campo.', '2024-07-20', 2, NOW(), NOW()),
('Información', 'Concierto de Rock en Tordesillas', 'El concierto de rock tendrá lugar el 5 de agosto.', '2024-08-05', 3, NOW(), NOW()),
('Evento', 'Exposición de Arte en Simancas', 'La exposición de arte se inaugurará el 10 de septiembre.', '2024-09-10', 4, NOW(), NOW()),
('Aviso', 'Teatro al Aire Libre en Olmedo', 'El teatro al aire libre se realizará el 25 de octubre.', '2024-10-25', 5, NOW(), NOW());