import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

declare var tinymce: any;

@Component( {
    selector: 'simple-tiny',
    templateUrl: './editor.html'
})

export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Output() onEditorKeyup = new EventEmitter<any>();

    editor;

    ngAfterViewInit() {
        tinymce.init( {
            selector: 'textarea',
            height: 500,
            menubar: false,
            skin_url: 'assets/skins/lightgray',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            content_css: '//www.tinymce.com/css/codepen.min.css'
        });
    }

    ngOnDestroy() {
        tinymce.remove( this.editor );
    }
}