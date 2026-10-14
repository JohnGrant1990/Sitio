// ==========================================================
// JURASSIC PARK - SISTEMA DE CONTROL DE ISLA NUBLAR (JS)
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("🦖 SISTEMA DE SEGURIDAD INGEN CARGADO CORRECTAMENTE.");

    // 1. Funcionalidad del Botón de Emergencia (Alarma Interactiva)
    const btnAlarm = document.getElementById('btn-toggle-alarm');
    const systemStatusText = document.getElementById('system-status-text');
    const hazardBanner = document.getElementById('hazard-banner');
    let emergencyActive = false;

    if (btnAlarm) {
        btnAlarm.addEventListener('click', () => {
            emergencyActive = !emergencyActive;
            document.body.classList.toggle('emergency-mode', emergencyActive);

            if (emergencyActive) {
                systemStatusText.innerHTML = "🚨 ALERTA ROJA: ¡FALLO EN EL SISTEMA ELÉCTRICO! LOS DINOSAURIOS HAN ESCAPADO 🦖";
                systemStatusText.className = "small text-danger fw-bold";
                btnAlarm.textContent = "🟢 Restablecer Energía del Parque";
                btnAlarm.className = "btn btn-sm btn-success fw-bold text-uppercase";
                hazardBanner.textContent = "🚨 PELIGRO EXTREMO: EVACUACIÓN INMEDIATA HACIA EL HELIPUERTO 🚨";
                
                // Mostrar alerta emergente en pantalla
                alert("⚠️ ¡ALERTA DE SEGURIDAD INGEN! Dennis Nedry ha desactivado las cerraduras de seguridad. ¡Busca refugio!");
            } else {
                systemStatusText.innerHTML = "🟢 Estado del Sistema: Cercos Electrificados Operando (10,000V)";
                systemStatusText.className = "small text-warning fw-bold";
                btnAlarm.textContent = "🚨 Activar Protocolo de Emergencia (Corte de Energía)";
                btnAlarm.className = "btn btn-sm btn-danger fw-bold text-uppercase";
                hazardBanner.textContent = "⚠️ ADVERTENCIA: ZONA DE CONTENCIÓN NIVELES 4 Y 5 ACTIVA — MANTÉNGASE EN LAS RUTAS AUTORIZADAS ⚠️";
                
                alert("✅ Sistema restaurado. Las cercas eléctricas están operando con normalidad.");
            }
        });
    }

    // 2. Interactividad en las Tarjetas (Muestra alerta en pantalla al hacer clic)
    const cards = document.querySelectorAll('.card-jp');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const attractionName = card.getAttribute('data-attraction') || "Zona del Parque";
            
            // Creamos un elemento flotante dinámico temporal en la pantalla
            showFloatingAlert(`🔍 Inspeccionando: <strong>${attractionName}</strong> - Estado: Seguro bajo supervisión de guardaparques.`);
        });
    });

    // 3. Función auxiliar para mostrar alertas flotantes visuales en la página
    function showFloatingAlert(message) {
        // Eliminar alerta previa si existe
        const existingAlert = document.getElementById('dynamic-floating-alert');
        if (existingAlert) existingAlert.remove();

        const alertDiv = document.createElement('div');
        alertDiv.id = 'dynamic-floating-alert';
        alertDiv.className = 'alert alert-warning border-danger shadow-lg position-fixed bottom-0 start-50 translate-middle-x mb-4 z-3 text-center fw-bold';
        alertDiv.style.maxWidth = '90%';
        alertDiv.innerHTML = `${message} <button type="button" class="btn-close ms-2" onclick="this.parentElement.remove()"></button>`;
        
        document.body.appendChild(alertDiv);

        // Auto-remover después de 4 segundos
        setTimeout(() => {
            if (alertDiv.parentElement) alertDiv.remove();
        }, 4000);
    }
});