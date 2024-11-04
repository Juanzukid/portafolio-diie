import { descriptions } from "./descriptions.js";
import { funciones } from "./descriptions.js";

export const projects = [
    {
        id_project: "1",
        title: "Sistema de gestion de Inventario",
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
        logo: "submarino-logo.png",
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
        title: "DGH",
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
    }
]; 