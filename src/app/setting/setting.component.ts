import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
  animations: [
    trigger('zoomDialog', [
      state('void', style({ transform: 'scale(0.5)', opacity: 0 })),
      state('open', style({ transform: 'scale(1)', opacity: 1 })),
      state('closed', style({ transform: 'scale(0.5)', opacity: 0 })),

      transition('void => open', [
        animate('300ms ease-out')
      ]),
      transition('open => closed', [
        animate('200ms ease-in')
      ])
    ]),
    trigger('fadeOverlay', [
      state('void', style({ opacity: 0 })),
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0 })),

      transition('void => open', [
        animate('200ms ease-out')
      ]),
      transition('open => closed', [
        animate('150ms ease-in')
      ])
    ])
  ]
})
export class SettingComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Dialog Title';
  @Input() closeButtonText: string = 'Close';

  @Input() initialMusicToggleState: boolean = true;
  @Input() initialSoundEffectsToggleState: boolean = true;

  @Output() closeDialog = new EventEmitter<void>();
  @Output() musicToggleChange = new EventEmitter<boolean>();
  @Output() soundEffectsToggleChange = new EventEmitter<boolean>();

  public musicEnabled: boolean = true;
  public soundEffectsEnabled: boolean = true;

  ngOnInit(): void {
    // Initialize internal toggle states from inputs
    this.musicEnabled = this.initialMusicToggleState;
    this.soundEffectsEnabled = this.initialSoundEffectsToggleState;
  }

  open(): void {
    this.isOpen = true;
    console.log("setting open");
  }

  close(): void {
    this.isOpen = false;
    this.closeDialog.emit();
  }

  onMusicToggleChange(): void {
    this.musicEnabled = !this.musicEnabled;
    this.musicToggleChange.emit(this.musicEnabled);
  }

  onSoundEffectsToggleChange(): void {
    this.soundEffectsEnabled = !this.soundEffectsEnabled;
    this.soundEffectsToggleChange.emit(this.soundEffectsEnabled);
  }
}
