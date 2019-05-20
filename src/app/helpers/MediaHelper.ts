import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class MediaHelper {

    private BASE64_MARKER = ';base64,';
    private chunkSize = 2048;

    public processFile(mediaInput: any, callback: (fileName: string, chunk: any[], contentLength: number) => void) {

        const filesCount = mediaInput.files.length;

        for (let i = 0; i < filesCount; i++) {

            const reader = new FileReader();

            reader.addEventListener('load', (event: any) => {
                const byte64 = event.target.result;

                const binaryArray = this.convertDataURIToBinary(byte64);

                const chunkArray = this.getChunkedArray(binaryArray, this.chunkSize);

                chunkArray.forEach((chunk) => {
                    callback(mediaInput.files[i].name, chunk, binaryArray.length);
                });
            });

            reader.readAsDataURL(mediaInput.files[i]);
        }
    }

    convertDataURIToBinary(dataURI: any): number[] {
        const base64Index = dataURI.indexOf(this.BASE64_MARKER) + this.BASE64_MARKER.length;

        const base64String = dataURI.substring(base64Index);

        const raw = window.atob(base64String);

        const rawLength = raw.length;

        const array = new Uint8Array(new ArrayBuffer(rawLength));

        for (let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }

        const result = Array.from(array)

        return result;
    }

    getChunkedArray(array: any[], chunkSize: number) {
        const result = [];

        for (let i = 0, len = array.length; i < len; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }

        return result;
    }

}