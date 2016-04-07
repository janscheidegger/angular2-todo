npm install -g typescript typings lite-server
npm install

tsc --watch
lite-server


## Attributes and Events
[something] property
(something) event

[ngModel]="myName" + (ngModelChange)="myName" = [(ngModel)]="myName"
[name] + (nameChanged)

 @Input() name:string;
 @Output() nameChange: EventEmitter<string> = new EventEmitter()
 changeName() {
    this.nameChange.emit(this.name + '!!');
 }
 
 @Component
 directives
 
 ## Services
 
Angular 1 => One Injector for One app
Angular 2 => Looks at parent for Injectors, but has own Injectors (Services can get initialized twice if you provide the Injector again in "SubClass")
Global Services can be defined in bootstraps second argument in main.ts. => You don't need to use providers in components

 @Component
 providers
 
 Dependency Injection:
  constructor(name: Service) {
  
  }
  
 @Injectable() allow to inject Services into Services (from angular2/core)
 
 bootstrap(app, [FriendService, provide(FriendsConfig, {useValue/useClass/useFactory})]); to inject custom
 
 for each class
 
  ngOnInit() {
    console.log("asdfasf");
 }
 ngOnChangeDetection
 ngOnDestroy


##Immutable

this.arr = this.arr.concat([jals]);
better than
this.arr.push([jals]);

changeDetection: changeDetectionStrategy.onPush; // On component, Better performance => no Dirty checking for this component

