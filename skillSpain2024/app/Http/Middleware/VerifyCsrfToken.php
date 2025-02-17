<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    // En app/Http/Middleware/VerifyCsrfToken.php

    protected $except = [
        '/provincias',
        '/pueblos',
        '/usuarios',
        '/eventos',
        '/bailes',  // Aquí no necesitas el prefijo "api"
        '/inscripciones',
        '/noticias',
        '/csrf-token', // Asegúrate de que este endpoint esté aquí
    ];

}

