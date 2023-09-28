import Swal from 'sweetalert2'

export default async function alert({ title, text, icon, showCancelButton }) {
    return await Swal.fire({
        title,
        text,
        icon,
        showCancelButton,
        cancelButtonText: "Cancelar",
        confirmButtonText: showCancelButton ? 'Confirmar' : 'Ok',
        confirmButtonColor: showCancelButton ? "red" : "blue"
    })
}