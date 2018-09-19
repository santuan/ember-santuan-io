export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('works'),
    this.use('scrollThen', 'fade' ,  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('collections'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.fromRoute('collections'),
    this.toRoute('works'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.fromRoute('contact'),
    this.toRoute('works'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.fromRoute('collections'),
    this.toRoute('contact'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('contact'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.fromRoute('works.show'),
    this.toRoute('collections'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

   this.transition(
    this.fromRoute('works.show'),
    this.toRoute('contact'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.fromRoute('works.show'),
    this.toRoute('index'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.withinRoute('works.show'),
    this.toRoute('works.show'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

  this.transition(
    this.withinRoute('works.show'),
    this.toRoute('works.index'),
    this.use('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]}),
    this.reverse('scrollThen', 'fade',  {duration: 1600, delay: 0, easing: [0.645, 0.045, 0.355, 1 ]})
  );

}
