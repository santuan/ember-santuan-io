export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('colecciones-libres'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('proyectos'),
    this.use('fade'),
    this.reverse('fade')
  );

  this.transition(
    this.fromRoute('proyectos'),
    this.toRoute('colecciones-libres'),
    this.use('fade'),
    this.reverse('fade')
  );
}
