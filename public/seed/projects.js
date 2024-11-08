import { descriptions } from "./descriptions.js";
import { funciones } from "./descriptions.js";

export const projects = [
    {
        id_project: "1",
        title: "Sistema de Gestión de Inventario",
        description: descriptions.inventario,
        logo: "inventario-logo.png",
        functions: JSON.stringify(funciones.inventario),
        tecnologys: "Javascript-Php-Html-Css",
        images: "inv_1.png/inv_2.png/inv_3.png/inv_4.png/inv_5.png/inv_6.png/inv_7.png",
        tags: "Gestion-Checkeo-Inventario"
    },
    {
        id_project: "2",
        title: "Sistema de Gestión de Mantenimiento",
        description: descriptions.cempai,
        logo: "cempai-logo.png",
        functions: JSON.stringify(funciones.cempai),
        tecnologys: "Javascript-Php-Html-Css",
        images: "cem_1.png/cem_2.png/cem_3.png/cem_4.png/cem_5.png/cem_6.png",
        tags: "Gestion-Prevención-Mantenimiento"
    },
    {
        id_project: "3",
        title: "Simulador de Navegación Marítima",
        description: descriptions.maritimo,
        logo: "maritimo-logo.png",
        functions: JSON.stringify(funciones.maritimo),
        tecnologys: "Unity-C#",
        images: "mar_1.jpg/mar_2.png/mar_3.png/mar_4.png/mar_5.png/mar_6.png/mar_7.png",
        tags: "Simulación-Adiestramiento-Virtual"
    },
    {
        id_project: "4",
        title: "Simulador de Sumergible",
        description: descriptions.submarino,
        logo: "Submarino-logo.png",
        functions: JSON.stringify(funciones.submarino),
        tecnologys: "Unity-C#",
        images: "sub_1.png/sub_2.png/sub_3.png/sub_4.png/sub_5.png/sub_6.png/sub_7.png",
        tags: "Simulación-Adiestramiento-Virtual"
    },
    {

        id_project: "5",
        title: "SIMA",
        description: descriptions.sima,
        logo: "sima-logo.png",
        functions: JSON.stringify(funciones.sima),
        tecnologys: "Tecnoligias 5",
        images: "sima_1.png/sima_2.png/sima_3.png/sima_4.png/sima_5.png/sima_6.png",
        tags: "Manejo-Monitoreo-Control"
    },
    {

        id_project: "6",
        title: "Sistema de Gestión de Datos",
        description: descriptions.DGH,
        logo: "dgh-logo.png",
        functions: JSON.stringify(funciones.DGH),
        tecnologys: "Tecnoligias 6",
        images: "dgh_1.jpg/dgh_2.jpg/dgh_3.jpg/dgh_4.jpg/dgh_5.jpg/dgh_6.jpg/dgh_7.jpg/dgh_8.jpg",
        tags: "Gestion-Datos-Logística"
    },
    {

        id_project: "7",
        title: "Vehículo",
        description: descriptions.vehiculo,
        logo: "vehiculo-logo.png",
        functions: JSON.stringify(funciones.vehiculo),
        tecnologys: "Tecnoligias 6",
        images: "veh_1.jpg/veh_2.jpg/veh_3.jpg/veh_4.jpg/veh_5.jpg/veh_6.jpg",
        tags: "Mantenimeinto-Seguimiento-Inspección"
    },
    {

        id_project: "8",
        title: "Gestión de Proyectos",
        description: descriptions.project_manager,
        logo: "pm-logo.png",
        functions: JSON.stringify(funciones.project_manager),
        tecnologys: "Tecnoligias 6",
        images: "pm_1.png/pm_2.png/pm_3.png/pm_4.png/pm_5.png",
        tags: "Gestion-Gerencia-Seguimiento"
    },
    {

        id_project: "9",
        title: "Control de Asistencia",
        description: descriptions.asistencia,
        logo: "asistencia-logo.png",
        functions: JSON.stringify(funciones.asistencia),
        tecnologys: "Tecnoligias 6",
        images: "asi_1.png/asi_2.png/asi_3.png/asi_4.png/asi_5.png/asi_6.png/asi_7.png/asi_8.png",
        tags: "Gestion-Personal-Seguimiento"
    },
    {

        id_project: "10",
        title: "DEMO: Gestion Hospitalaria",
        description: descriptions.hospital,
        logo: "hospital-logo.png",
        functions: JSON.stringify(funciones.hospital),
        tecnologys: "Tecnoligias 6",
        images: "hos_1.JPG/hos_2.JPG/hos_3.JPG/hos_4.JPG/hos_5.JPG/hos_6.JPG/hos_7.JPG/hos_8.JPG",
        tags: "Gestion-Personal-Seguimiento"
    },
    {

        id_project: "11",
        title: "DRONEX: Fabricación de drones",
        description: descriptions.drones,
        logo: "drones-logo.webp",
        functions: JSON.stringify(funciones.drones),
        tecnologys: "Tecnoligias 6",
        images: "dr_1.jpg/dr_2.jpg/dr_3.jpg/dr_4.jpg/dr_5.jpg/dr_6.jpg",
        tags: "Dron-Electrónica-Robótica"
    },
    {

        id_project: "12",
        title: "Automatización IoT e IA",
        description: descriptions.automatizacion,
        logo: "automatizacion-logo.png",
        functions: JSON.stringify(funciones.automatizacion),
        tecnologys: "Tecnoligias 6",
        images: "aut_1.PNG/aut_2.jpeg/aut_3.jpeg/aut_4.jpeg/aut_5.jpeg/aut_6.jpeg/aut_7.jpg",
        tags: "Gestion-Personal-Seguimiento"
    },
]; 