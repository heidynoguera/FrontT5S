class Times {
    hour: number;
    minute: number;
  
    constructor(hour: number, minute: number) {
      this.hour = hour;
      this.minute = minute;
    }
  }
  
  function convertirATime(valor: string): Times | null {
    const regex = /^(\d{1,2}):(\d{2})$/;
    const match = valor.match(regex);
  
    if (!match) {
      return null; // Formato no válido
    }
  
    const hour = parseInt(match[1], 10);
    const minute = parseInt(match[2], 10);
  
    return new Times(hour, minute);
  }