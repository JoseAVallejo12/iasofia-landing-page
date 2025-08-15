import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

interface TermSection {
  id: string;
  title: string;
  content: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-term-and-condition',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './term-and-condition.component.html',
  styleUrls: ['./term-and-condition.component.scss']
})
export class TermAndConditionComponent implements OnInit {
  @Input() appNombre = 'IA Sofía';
  @Input() empresaNombre = 'IA Sofía';
  @Input() emailSoporte = 'soporte@iasofia.io';
  @Input() fechaActualizacion = '2025-08-15';
  @Input() requireConsent = true;
  @Output() accepted = new EventEmitter<boolean>();

  consent = false;
  
  sections: TermSection[] = [
    {
      id: 'introduccion',
      title: '1. Introducción',
      content: 'Bienvenido/a a {{appNombre}}. Estos Términos y Condiciones regulan el acceso y uso del sitio web y/o aplicación operados por {{empresaNombre}} ("Nosotros"). Al utilizar el servicio declaras haber leído y aceptado estos Términos.',
      isExpanded: true
    },
    {
      id: 'definiciones',
      title: '2. Definiciones',
      content: '• <strong>Servicio:</strong> la plataforma de asistente de inteligencia artificial para gestionar reservas de calendario automáticamente.<br>• <strong>Usuario:</strong> toda persona que accede o utiliza el Servicio.<br>• <strong>Integraciones:</strong> conexiones con servicios de terceros (p. ej., Google Calendar, Microsoft Outlook/365, Zoom, Meet, Meta/Facebook).<br>• <strong>Contenido:</strong> información proporcionada por ti al Servicio (p. ej., textos, disponibilidad, preferencias, datos de invitados).',
      isExpanded: false
    },
    {
      id: 'elegibilidad',
      title: '3. Elegibilidad',
      content: 'Debes tener la capacidad legal para celebrar contratos en tu jurisdicción. Si usas el Servicio en nombre de una organización, declaras tener autoridad para vincularla a estos Términos.',
      isExpanded: false
    },
    {
      id: 'cuenta',
      title: '4. Cuenta y seguridad',
      content: '• Eres responsable de la exactitud de tus datos y de mantener la confidencialidad de tus credenciales.<br>• Notifícanos de inmediato sobre cualquier uso no autorizado de tu cuenta.<br>• Podemos suspender o limitar cuentas ante actividades sospechosas o incumplimientos.',
      isExpanded: false
    },
    {
      id: 'servicio',
      title: '5. Descripción del servicio',
      content: 'El Servicio utiliza modelos de IA para entender solicitudes, proponer horarios y crear eventos en tus calendarios conectados, de acuerdo con tus reglas (disponibilidad, franjas, ubicaciones, duración, etc.). Puedes configurar mensajes y flujos de confirmación/recordatorio para invitados.<br><br><strong>Limitaciones</strong><br>• La automatización depende de la disponibilidad que reporten tus calendarios conectados y de las integraciones activas.<br>• Los resultados generados por IA pueden contener errores o imprecisiones. Debes revisar la información crítica antes de actuar.',
      isExpanded: false
    },
    {
      id: 'integraciones',
      title: '6. Integraciones de terceros',
      content: 'Al conectar Integraciones (p. ej., Google/Microsoft/Meta), autorizas al Servicio a leer y/o escribir datos necesarios para gestionar reservas (disponibilidad, eventos, asistentes, ubicaciones de videollamada, etc.). Las Integraciones están sujetas a los términos y políticas de sus respectivos proveedores. No somos responsables por cambios, interrupciones o errores de dichos servicios.',
      isExpanded: false
    },
    {
      id: 'meta',
      title: '7. Uso de datos de Meta/Facebook',
      content: 'Si conectas tu cuenta de Meta/Facebook, accederemos únicamente a los datos autorizados por ti a través del flujo de permisos oficial de la plataforma Meta. Estos datos se usarán exclusivamente para las finalidades indicadas (p. ej., verificar identidad, gestionar reservas vinculadas a eventos de Facebook, o facilitar recordatorios).<br>• No compartimos, vendemos ni cedemos estos datos a terceros.<br>• Puedes revocar en cualquier momento los permisos desde la configuración de tu cuenta Meta o desde nuestra aplicación.<br>• Cumplimos con las <a href=\"https://developers.facebook.com/policy/\" target=\"_blank\">Políticas de la Plataforma de Meta</a> y tratamos esta información conforme a nuestra Política de Privacidad.',
      isExpanded: false
    },
    {
      id: 'privacidad',
      title: '8. Privacidad y datos',
      content: '• Tratamos tus datos conforme a nuestra Política de Privacidad.<br>• Procesamos datos de contactos/invitados únicamente para gestionar reservas y comunicaciones relacionadas.<br>• Implementamos medidas razonables de seguridad; sin embargo, ningún método es 100% infalible.<br>• Cuando corresponda, celebramos acuerdos de procesamiento de datos (DPA) y respetamos solicitudes de acceso/eliminación según la ley aplicable.<br>• Incluimos mecanismos para que el usuario pueda revocar permisos otorgados a integraciones como Meta/Facebook, Google o Microsoft.',
      isExpanded: false
    },
    {
      id: 'uso-aceptable',
      title: '9. Uso aceptable',
      content: '• No utilices el Servicio para spam, fraude, suplantación, scraping no autorizado, ingeniería inversa o para infringir derechos de terceros.<br>• No ingreses información que no estés autorizado a compartir o que contenga datos sensibles innecesarios.<br>• Podemos limitar tasas de uso para proteger estabilidad y seguridad.',
      isExpanded: false
    },
    {
      id: 'propiedad',
      title: '10. Propiedad intelectual',
      content: 'Conservamos todos los derechos sobre el Servicio y sus componentes. Te concedemos una licencia limitada, revocable e intransferible para usarlo según estos Términos. Conservas la titularidad de tu Contenido. Nos otorgas una licencia para procesarlo a fin de prestar y mejorar el Servicio.',
      isExpanded: false
    },
    {
      id: 'pagos',
      title: '11. Precios y facturación',
      content: 'Los planes, precios y límites de uso pueden cambiar. Salvo que se indique lo contrario, las cuotas son no reembolsables. Los impuestos aplicables se añadirán según corresponda.',
      isExpanded: false
    },
    {
      id: 'disponibilidad',
      title: '12. Disponibilidad y soporte',
      content: '• Nos esforzamos por mantener alta disponibilidad, pero el Servicio puede verse interrumpido por mantenimiento, fallos de terceros o fuerza mayor.<br>• El soporte se brinda a través de {{emailSoporte}}. Los tiempos de respuesta pueden variar.',
      isExpanded: false
    },
    {
      id: 'responsabilidad',
      title: '13. Garantías y responsabilidad',
      content: 'El Servicio se proporciona \"tal cual\" y \"según disponibilidad\". En la medida máxima permitida por la ley, rechazamos garantías implícitas (comercialización, idoneidad, no infracción). No seremos responsables por daños indirectos, incidentales, especiales, derivados o punitivos, ni por pérdida de datos, ingresos o reputación.',
      isExpanded: false
    },
    {
      id: 'terminacion',
      title: '14. Terminación',
      content: 'Puedes dejar de usar el Servicio en cualquier momento. Podemos suspender o terminar el acceso si incumples estos Términos o si es necesario por seguridad, cumplimiento legal o protección del Servicio. Tras la terminación, podremos conservar ciertos datos durante el tiempo permitido o exigido por ley.',
      isExpanded: false
    },
    {
      id: 'cambios',
      title: '15. Cambios a estos términos',
      content: 'Podemos actualizar estos Términos. Cuando se realicen cambios materiales, intentaremos notificarte por medios razonables. El uso continuado del Servicio tras la actualización implica aceptación de los nuevos Términos.',
      isExpanded: false
    },
    {
      id: 'ley',
      title: '16. Ley aplicable y jurisdicción',
      content: 'Estos Términos se regirán por las leyes de tu país/estado y cualquier disputa se someterá a los tribunales competentes de tu ciudad/país, salvo disposiciones imperativas en contrario. Ajusta este apartado con tu asesor legal.',
      isExpanded: false
    },
    {
      id: 'contacto',
      title: '17. Contacto',
      content: 'Si tienes preguntas sobre estos Términos, contáctanos en <a href=\"mailto:{{emailSoporte}}\">{{emailSoporte}}</a>.',
      isExpanded: false
    }
  ];
  

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('IA Sofía | Términos y Condiciones');
    this.sections = this.sections.map(section => ({
      ...section,
      content: section.content
        .replace(/\{\{appNombre\}\}/g, this.appNombre)
        .replace(/\{\{empresaNombre\}\}/g, this.empresaNombre)
        .replace(/\{\{emailSoporte\}\}/g, this.emailSoporte)
    }));
  }

  toggleSection(section: TermSection): void {
    section.isExpanded = !section.isExpanded;
  }

  emitirAceptacion() {
    this.router.navigate(['/']);
  }
}
