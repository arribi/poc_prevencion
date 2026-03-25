// main.js

document.addEventListener('DOMContentLoaded', () => {

  // Inicializar el visor 360 con la imagen local
  const visor = pannellum.viewer('panorama', {
    "type": "equirectangular",
    // Ahora cargamos la imagen descargada en nuestra propia carpeta
    "panorama": "servidores.png",
    "autoLoad": true,
    "compass": true,
    "hotSpots": [
      // HOTSPOT 1: ACCIÓN INCORRECTA (Riesgo)
      {
        "pitch": -10,   // Ajuste vertical (abajo)
        "yaw": -30,     // Ajuste horizontal (izquierda)
        "type": "info",
        "text": "⚠️ Peligro: Cuadro eléctrico abierto",
        "clickHandlerFunc": mostrarConsecuencias,
        "clickHandlerArgs": {
          "tipo": "error",
          "titulo": "⚠️ Acción Incorrecta",
          "riesgo": "Riesgo de contacto eléctrico directo por manipulación de componentes con tensión sin el aislamiento adecuado (Falta de guantes dieléctricos).",
          "dano": "Quemaduras de segundo grado en las manos y posible arritmia cardíaca.",
          "cura": "Desconectar la fuente de alimentación inmediata. Enfriar la quemadura con agua, cubrir con gasas estériles y trasladar a urgencias."
        }
      },
      // HOTSPOT 2: ACCIÓN CORRECTA (Prevención)
      {
        "pitch": 5,    // Ajuste vertical (ligeramente arriba)
        "yaw": 45,     // Ajuste horizontal (derecha)
        "type": "info",
        "text": "✅ Correcto: Extintor de CO2",
        "clickHandlerFunc": mostrarConsecuencias,
        "clickHandlerArgs": {
          "tipo": "acierto",
          "titulo": "✅ Acción Correcta",
          "riesgo": "Uso de extintor de CO2 (Nieve Carbónica), el adecuado para fuegos eléctricos en salas de servidores (Clase C), ya que no daña los equipos.",
          "dano": "Al actuar correctamente, se evita la propagación del fuego y el daño a los componentes informáticos.",
          "cura": "No hay lesiones. Se procede a ventilar la sala tras la extinción para evitar asfixia por desplazamiento de oxígeno."
        }
      }
    ]
  });

  // 2. Función para mostrar la ventana con los datos dinámicos
  function mostrarConsecuencias(evt, args) {
    // Cambiamos el título y el color según si es error o acierto
    const modal = document.getElementById('modal-riesgo');
    const tituloElement = modal.querySelector('h2');

    tituloElement.innerText = args.titulo;
    if (args.tipo === "error") {
      tituloElement.style.color = "#d9534f"; // Rojo
    } else {
      tituloElement.style.color = "#5cb85c"; // Verde
    }

    // Inyectamos los textos
    document.getElementById('texto-riesgo').innerText = args.riesgo;
    document.getElementById('texto-dano').innerText = args.dano;
    document.getElementById('texto-cura').innerText = args.cura;

    modal.style.display = 'block';
  }

  // 3. Evento para cerrar la ventana modal
  const botonCerrar = document.getElementById('btn-cerrar');
  botonCerrar.addEventListener('click', () => {
    document.getElementById('modal-riesgo').style.display = 'none';
  });

});