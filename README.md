# CSS pro tips

```
.fade-in-medium {
  animation: fade 3s linear;
}

.fade-in-fast {
  animation: fade 1s linear;
}

.fade-in-slow {
  animation: fade 5s linear;
}

@keyframes fade {
  0% {
    transform: translateY(300px) translateX(200px);
    opacity: 0;
  }
  50% {
    transform: translateX(200px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
```
