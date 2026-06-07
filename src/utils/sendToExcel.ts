export const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbz5tlY1k7kq880ZVFW9PXOjlXMwE7GfjRxHtcMhKNA3wjA74Orhre_tHLMfwbsN4HNu_g/exec'

export async function sendToExcel(data: { name: string; email: string; message: string }) {
    try {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('message', data.message)
        formData.append('page', document.title || window.location.pathname || 'Unknown')
        const urlParams = new URLSearchParams(window.location.search)
        formData.append('utm_source', urlParams.get('utm_source') || 'Direct')

        await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: formData })
        return true
    } catch (error) {
        console.error('sendToExcel error', error)
        return false
    }
}
