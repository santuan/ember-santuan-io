export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('works'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('collections'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('collections'),
    this.toRoute('works'),
    this.use('fade'),
    this.reverse('fade')
  );

}
