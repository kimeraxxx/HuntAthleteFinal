import { ToastController } from "@ionic/angular";

export abstract class Utiles {
    static toastController: ToastController = new ToastController();
          
    constructor() {}
     public static async mostrarToast(message:string, duracion:number) {
        const toast = await this.toastController.create({
            message: message,
            duration: duracion
          });
          toast.present();
    }
}